"use server";
import { QueryResult } from "@vercel/postgres";
import { User, users } from "./db/schema";
import { db } from "./db/drizzle";
import { eq } from "drizzle-orm";
import { signOut } from "./auth";

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
  return db.insert(users).values({
    email: email,
    hashedpassword: password,
  });
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
