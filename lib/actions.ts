"use server";
import { QueryResult } from "@vercel/postgres";
import { User, conversations, messages, users } from "./db/schema";
import { db } from "./db/drizzle";
import { eq } from "drizzle-orm";
import { auth, signOut } from "@/auth";
import { Message } from "ai";

import { v4 as uuidv4 } from "uuid";

const id = uuidv4();

/**
 * Retrieves the user information.
 * @returns {Promise<User>} A promise that resolves to the user object.
 * @throws {Error} If the user is not found.
 */

export async function getUser() {
  try {
    const session = await auth();
    const user = session?.user;
    if (!user) {
      throw new Error("User not found");
    }
    return user;
  } catch (error) {
    console.error("Error getting user:", error);
    throw error;
  }
}

// Get a single chat by its ID
// export async function getChat(chatId: number) {
//   return await prisma.conversation.findUnique({
//     where: { id: chatId },
//     include: {
//       messages: true,
//       user: true,
//     },
//   });
// }

// Get multiple chats for a user by their userID
// export async function getChats(userId: string) {
//   return await prisma.conversation.findMany({
//     where: { userId: userId },
//     include: {
//       messages: true,
//       user: true,
//     },
//   });
// }

// Get a user by their email
// export async function getUser(email: string) {
//   return await prisma.user.findUnique({
//     where: { email: email },
//   });
// }

// function to register a new user
export async function registerUser({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<QueryResult<User>> {
  const result = db.insert(users).values({
    email: email,
    hashedpassword: password,
  });

  // console.log(result, "result from registerUser");

  return result;
}

// function to authenticate user login
export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}): Promise<QueryResult<User> | null> {
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  console.log("user: ", user);
  if (user) {
    // Add your own password checking logic here
    if (user.hashedpassword === password) {
      // return user;
    }
  }

  // Return null if user credentials are not valid
  return null;
}

export async function logoutUser() {
  return await signOut({
    redirectTo: "/auth/login",
  });
}

// Clears all chats for a user
// export async function clearChats(userId: string) {
//   return await prisma.conversation.deleteMany({
//     where: { userId: userId },
//   });
// }

// Removes a specific chat by its ID
// export async function removeChat(chatId: string) {
//   return await prisma.conversation.delete({
//     where: { id: chatId },
//   });
// }

// export async function saveMessageToConversation({
//   conversationId,
//   sender,
//   type,
//   text,
// }: {
//   conversationId: number;
//   sender: string;
//   type: string;
//   text: string;
// }) {
//   try {
//     const newMessage = await db.insert(messages).values({
//       conversationId: conversationId,
//       sender: sender,
//       type: type,
//       text: text,
//     });
//     console.log(newMessage, "newMessage");

//     return newMessage;
//   } catch (error) {
//     console.error("Error saving message:", error);
//   }
// }

async function saveConversation(message: Message) {
  try {
    const user = await getUser();
    if (!user) {
      throw new Error("User not found");
    }
    const chat = await db.query;
    if (!chat) {
      throw new Error("Chat not found");
    }
    // const newMessage = await prisma.message.create({
    //   data: {
    //     type: message.type,
    //     text: message.text,
    //     timestamp: message.timestamp,
    //     conversation: {
    //       connect: {
    //         id: chatId,
    //       },
    //     },
    //   },
    // });
    // return newMessage;
  } catch (error) {
    console.error("Error saving conversation:", error);
  }
}
