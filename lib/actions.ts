"use server";
import "server-only";
import { Chat, User, chats, messages, users } from "./db/schema";
import { db } from "./db/drizzle";
import { eq, desc, asc } from "drizzle-orm";
import { auth, signIn, signOut } from "@/auth";
import { Message } from "ai";

import { v4 as uuidv4 } from "uuid";
import { QueryResultKind } from "drizzle-orm/mysql-core";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";

const id = uuidv4();

const apiUrl = process.env.NEXT_PUBLIC_VERCEL_URL || "http://localhost:3000";

/**
 * Retrieves the user information.
 * @returns {Promise<User>} A promise that resolves to the user object.
 * @throws {Error} If the user is not found.
 */

export async function getUser() {
  try {
    const session = await auth();
    const user = session?.user;

    return user;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
}

export async function registerUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const result = db.insert(users).values({
    id: id,
    email: email,
    hashedpassword: password,
  });

  return result;
}

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (user) {
    // Add your own password checking logic here
    if (user.hashedpassword === password) {
      return user;
    }

    // Return null if user credentials are not valid
    throw new Error("Invalid credentials");
  }

  // Return null if user credentials are not valid
  throw new Error("User not found");
}

/**
 * Logs out the user.
 * @param redirectTo - The URL to redirect to after logout. Default is "/auth/login".
 * @returns A promise that resolves when the user is successfully logged out.
 */
export default async function logoutUser(
  { redirectTo }: { redirectTo?: string } = { redirectTo: "/auth/login" }
) {
  return await signOut({
    redirectTo: redirectTo,
  });
}

/**
 * Saves a chat to the database.
 * @param {Object} chat - The chat object to be saved.
 * @param {string} chat.id - The ID of the chat.
 * @param {string} chat.title - The title of the chat.
 * @param {Date} chat.createdAt - The creation date of the chat.
 * @param {string} chat.path - The path of the chat.
 * @returns {Promise<Object>} - The newly saved conversation object.
 * @throws {Error} - If there is an error saving the chat.
 */
export async function saveChatToDb({
  id,
  title,
  createdAt,
  path,
}: {
  id: string;
  title: string;
  createdAt: Date;
  path: string;
}) {
  try {
    const user = await getUser();

    const newChat = await db.insert(chats).values({
      id: id,
      title: title,
      userId: user?.email as string,
      createdAt: createdAt,
      path: path,
      sharePath: path,
    });

    revalidateTag("chats");

    return newChat;
  } catch (error) {
    console.error("Error saving chat:", error);
    throw error;
  }
}

/**
 * Retrieves a chat by its ID.
 * @param id The ID of the chat to retrieve.
 * @returns A Promise that resolves to the retrieved chat.
 * @throws If there is an error retrieving the chat.
 */
export async function getChatById(id: string) {
  try {
    const chat = await db.query.chats.findFirst({
      where: eq(chats.id, id),
    });
    return chat;
  } catch (error) {
    console.error("Error getting chat:", error);
    throw error;
  }
}

/**
 * Retrieves chats by user ID.
 * @param userId - The ID of the user.
 * @returns A Promise that resolves to an array of chats.
 * @throws If there is an error retrieving the chats.
 */
export async function getChatsByUserId(userId: string) {
  try {
    const result = await db.query.chats.findMany({
      where: eq(chats.userId, userId),
      orderBy(chat, operators) {
        return [desc(chat.createdAt)];
      },
    });

    return result;
  } catch (error) {
    console.error("Error getting chats:", error);
    throw error;
  }
}

/**
 * Retrieves messages by chat ID.
 * @param chatId - The ID of the chat.
 * @returns A promise that resolves to an array of messages.
 * @throws If there is an error retrieving the messages.
 */

export async function getMessagesByChatId(chatId: string) {
  try {
    const result = await db.query.messages.findMany({
      where: eq(messages.chatId, chatId),
      orderBy(fields, operators) {
        return [asc(fields.createdAt)];
      },
    });

    return result;
  } catch (error) {
    console.error("Error getting chats:", error);
    throw error;
  }
}

/**
 * Retrieves a message by its ID from the database.
 * @param id - The ID of the message to retrieve.
 * @returns A Promise that resolves to the retrieved message.
 * @throws If there is an error retrieving the message.
 */

export async function getMessageById(id: string) {
  try {
    const result = await db.query.messages.findFirst({
      where: eq(messages.id, id),
    });

    return result;
  } catch (error) {
    console.error("Error getting chats:", error);
    throw error;
  }
}

/**
 * Retrieves the last saved message timestamp for a chat.
 * @param chatId - The ID of the chat.
 * @returns A Promise that resolves to the timestamp of the last saved message.
 * @throws If there is an error retrieving the timestamp.
 */

export async function getLastSavedMessageTimestamp(chatId: string) {
  try {
    const result = await db.query.messages.findFirst({
      where: eq(messages.chatId, chatId),
      orderBy(fields, operators) {
        return [desc(fields.createdAt)];
      },
    });

    return result?.createdAt;
  } catch (error) {
    console.error("Error getting chats:", error);
    throw error;
  }
}

/**
 * Adds a message to the database.
 *
 * @param {Object} message - The message object.
 * @param {string} message.id - The ID of the message.
 * @param {string} message.chatId - The ID of the chat.
 * @param {string} message.role - The role of the sender.
 * @param {string} message.content - The content of the message.
 * @param {Date} message.createdAt - The creation date of the message.
 * @returns {Promise<Object>} - A promise that resolves to the newly added message.
 * @throws {Error} - If there is an error saving the message.
 */

export async function addMessageToDb({
  id,
  chatId,
  role,
  content,
  createdAt,
}: {
  id: string;
  chatId: string;
  role: string;
  content: string;
  createdAt: Date;
}) {
  try {
    const newMessage = await db.insert(messages).values({
      id: id,
      chatId: chatId,
      role: role,
      content: content,
      createdAt: createdAt,
    });

    return newMessage;
  } catch (error) {
    console.error("Error saving message:", error);
    throw error;
  }
}

/**
 * Deletes a chat by its ID.
 * @param id The ID of the chat to delete.
 * @returns A promise that resolves to the result of the deletion operation.
 * @throws If an error occurs while deleting the chat.
 */

export async function deleteChatById(id: string) {
  try {
    const result = await db.delete(chats).where(eq(chats.id, id));

    return result;
  } catch (error) {
    console.error("Error deleting chat:", error);
    throw error;
  }
}

/**
 * Deletes chats and messages associated with a specific user.
 * @param userId - The ID of the user whose chats and messages should be deleted.
 * @returns A Promise that resolves to the deleted chats.
 * @throws If there is an error deleting the chats and messages.
 */

export async function deleteChatsByUserId(userId: string) {
  try {
    const deletedChats = await db.transaction(async (tx) => {
      await tx.delete(chats).where(eq(chats.userId, userId));
      await tx.delete(messages).where(eq(messages.chatId, userId));
    });

    revalidatePath("/chat");

    return deletedChats;
  } catch (error) {
    console.error("Error deleting chats:", error);
    throw error;
  }
}

/**
 * Deletes a message by its chat ID.
 * @param id The ID of the chat.
 * @returns A promise that resolves to the result of the deletion operation.
 * @throws If an error occurs during the deletion process.
 */

export async function deleteMessageByChatId(id: string) {
  try {
    const result = await db.delete(messages).where(eq(messages.chatId, id));

    return result;
  } catch (error) {
    console.error("Error deleting message:", error);
    throw error;
  }
}

/**
 * Removes a chat and its associated messages from the database.
 * @param {Object} options - The options for removing the chat.
 * @param {string} options.id - The ID of the chat to be removed.
 * @param {string} options.path - The path of the chat to be removed.
 * @returns {Promise<Object>} - A promise that resolves to an object indicating the success or failure of the removal operation.
 * @throws {Error} - If an error occurs while deleting the chat.
 */

export async function removeChat({ id, path }: { id: string; path: string }) {
  try {
    const session = await auth();

    if (!session) {
      return {
        error: "Unauthorized",
      };
    }

    await db.transaction(async (tx) => {
      await tx.delete(chats).where(eq(chats.id, id));
      await tx.delete(messages).where(eq(messages.chatId, id));
    });

    revalidatePath("/chat");
    revalidatePath(path);

    return redirect("/chat");
  } catch (error) {
    console.error("Error deleting chat:", error);
    throw error;
  }
}

export async function fetchChats(user: User): Promise<Chat[]> {
  try {
    // const user = await getUser();

    const response = await fetch(`${apiUrl}/api/chats?userId=${user?.email}`, {
      next: { tags: ["chats"] },
    });

    const chats = await response.json();

    return chats;
  } catch (error) {
    console.error("Error fetching chats:", error);
    throw error;
  }
}

interface ChatWithMessages {
  chat: Chat;
  chatMessages: Message[];
}

export async function fetchChatById(id: string): Promise<ChatWithMessages> {
  try {
    const response = await fetch(`${apiUrl}/api/chat?chatId=${id}`, {
      next: { tags: ["chat"] },
    });

    const chat = await response.json();

    return chat;
  } catch (error) {
    console.error("Error fetching chat:", error);
    throw error;
  }
}

export async function logOut() {
  return await signOut();
}

export async function loginUserWithProvider(
  provider: string,
  redirectTo: string
) {
  return await signIn(provider, {
    redirectTo: redirectTo,
  });
}
