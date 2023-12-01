"use server";
import { v4 as uuidv4 } from "uuid";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { kv } from "@vercel/kv";
import { Chat, User } from "../lib/types";
import { auth } from "../lib/auth";

export async function getChats(userId?: string | null) {
  if (!userId) {
    return [];
  }

  try {
    const pipeline = kv.pipeline();
    const chats: string[] = await kv.zrange(`user:chat:${userId}`, 0, -1, {
      rev: true,
    });

    for (const chat of chats) {
      pipeline.hgetall(chat);
    }

    const results = await pipeline.exec();

    return results as Chat[];
  } catch (error) {
    return [];
  }
}

export async function getChat(id: string, userId: string) {
  const chat = await kv.hgetall<Chat>(`chat:${id}`);

  if (!chat || (userId && chat.userId !== userId)) {
    return null;
  }

  return chat;
}

export async function removeChat({ id, path }: { id: string; path: string }) {
  const session = await auth();

  if (!session) {
    return {
      error: "Unauthorized",
    };
  }

  const uid = await kv.hget<string>(`chat:${id}`, "userId");

  if (uid !== session?.user?.email) {
    return {
      error: "Unauthorized",
    };
  }

  await kv.del(`chat:${id}`);
  await kv.zrem(`user:chat:${session.user.email}`, `chat:${id}`);

  revalidatePath("/");
  return revalidatePath(path);
}

export async function clearChats() {
  const session = await auth();

  const id = session?.user.email;

  if (!id) {
    return {
      error: "Unauthorized",
    };
  }

  const chats: string[] = await kv.zrange(`user:chat:${id}`, 0, -1);
  if (!chats.length) {
    return redirect("/chat");
  }
  const pipeline = kv.pipeline();

  for (const chat of chats) {
    pipeline.del(chat);
    pipeline.zrem(`user:chat:${id}`, chat);
  }

  await pipeline.exec();

  revalidatePath("/chat");
  return redirect("/chat");
}

export async function createChat(title: string, messages: any[]) {
  const session = await auth();

  const userId = session?.user.email;
  const id = uuidv4();

  const payload = {
    id,
    title,
    userId,
    messages,
    createdAt: new Date().toISOString(),
  };

  await kv.hmset(`chat:${id}`, payload);
  await kv.zadd(`user:chat:${userId}`, {
    score: Date.now(),
    member: `chat:${id}`,
  });

  return payload;
}

export async function updateChat(chat: Chat) {
  const session = await auth();

  if (!session?.user?.id || session.user.id !== chat.userId) {
    return {
      error: "Unauthorized",
    };
  }

  await kv.hmset(`chat:${chat.id}`, chat);

  return chat;
}

export async function getSharedChat(id: string) {
  const chat = await kv.hgetall<Chat>(`chat:${id}`);

  if (!chat || !chat.sharePath) {
    return null;
  }

  return chat;
}

export async function shareChat(chat: Chat) {
  const session = await auth();

  if (!session?.user?.id || session.user.id !== chat.userId) {
    return {
      error: "Unauthorized",
    };
  }

  const payload = {
    ...chat,
    sharePath: `/share/${chat.id}`,
  };

  await kv.hmset(`chat:${chat.id}`, payload);

  return payload;
}

export async function registerUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const payload = {
    id: email,
    email,
    password,
  };

  const result = await kv.hmset(`user:${email}`, payload);

  console.log(result, "result from registerUser");

  return result;
}

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const payload = {
    email,
    password,
  };
}

export async function fetchUser(id: string) {
  try {
    const data = await kv.get(`user:${id}`);
    return data;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
}
