"use server";
import "server-only";
import {
  Chat,
  Reaction,
  User,
  chats,
  messages,
  reactions,
  users,
} from "./db/schema";
import { db } from "./db/drizzle";
import { eq, desc, asc, and } from "drizzle-orm";
import { auth, signIn, signOut } from "@/auth";
import { Message } from "ai";

import { v4 as uuidv4 } from "uuid";
import { QueryResultKind } from "drizzle-orm/mysql-core";
import { revalidatePath, revalidateTag } from "next/cache";
import { redirect } from "next/navigation";
import { apiUrl } from "./consts";

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
  const id = uuidv4();

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
  provider,
}: {
  email: string;
  password: string;
  provider: "credentials" | "google" | "github";
}) {
  const user = await db.query.users.findFirst({
    where: eq(users.email, email),
  });

  if (user) {
    console.log("User found:", user);
    if (!user.isActive) {
      throw new Error("User is not active");
    }

    if (provider !== "credentials") {
      return user;
    }

    if (user.hashedpassword === password) {
      return user;
    }

    // Return null if user credentials are not valid
    throw new Error("Invalid credentials");
  }

  // Return null if user credentials are not valid
  throw new Error("User not found");
}

export async function deactivateAccount(userId: string) {
  try {
    const result = await db
      .update(users)
      .set({
        isActive: false,
      })
      .where(eq(users.id, userId));

    return result;
  } catch (error) {
    console.error("Error deactivating account:", error);
    throw error;
  }
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
      // where: eq(messages.chatId, chatId),
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

/**
 * Fetches the chats for the current user.
 * @returns A promise that resolves to an array of Chat objects.
 * @throws If there is an error fetching the chats.
 */
export async function fetchChats(): Promise<Chat[]> {
  try {
    const user = await getUser();

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

/**
 * Fetches a chat by its ID.
 * @param id The ID of the chat to fetch.
 * @returns A promise that resolves to the fetched chat with messages.
 * @throws If there is an error fetching the chat.
 */
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

/**
 * Logs out the user.
 * @returns {Promise<void>} A promise that resolves when the user is logged out.
 */
export async function logOut() {
  return await signOut();
}

/**
 * Logs in a user with the specified provider and redirects them to the specified URL.
 * @param provider The provider to use for authentication.
 * @param redirectTo The URL to redirect the user to after successful authentication.
 * @returns A promise that resolves when the user is logged in.
 */
export async function loginUserWithProvider(
  provider: string,
  redirectTo: string
) {
  return await signIn(provider, {
    redirectTo: redirectTo,
  });
}

/**
 * Adds a reaction to a message.
 * @param {Reaction} reaction - The reaction object containing messageId, userId, type, and feedback.
 * @returns {Promise<any>} - A promise that resolves with the result of the insertion.
 * @throws {Error} - If there is an error liking the message.
 */
export async function addReaction({
  messageId,
  userId,
  type,
  feedback,
}: Reaction) {
  try {
    const result = await db.insert(reactions).values({
      messageId: messageId,
      userId: userId,
      type: type,
      feedback: feedback,
    });

    return result;
  } catch (error) {
    console.error("Error liking message:", error);
    throw error;
  }
}

/**
 * Checks if a message is liked by a specific user.
 * @param {Object} params - The parameters for the function.
 * @param {string} params.messageId - The ID of the message.
 * @param {string} params.userId - The ID of the user.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating whether the message is liked by the user.
 */
export async function isMessageLikedByUser({
  messageId,
  userId,
}: Pick<Reaction, "feedback" | "messageId" | "userId">) {
  const reaction = await db.query.reactions.findFirst({
    where: and(
      eq(reactions.messageId, messageId),
      eq(reactions.userId, userId),
      eq(reactions.type, "like")
    ),
  });

  return !!reaction;
}

/**
 * Checks if a message is disliked by a user.
 * @param {Object} params - The parameters for the function.
 * @param {string} params.messageId - The ID of the message.
 * @param {string} params.userId - The ID of the user.
 * @returns {Promise<boolean>} - A promise that resolves to a boolean indicating whether the message is disliked by the user.
 */
export async function isMessageDislikedByUser({
  messageId,
  userId,
}: Pick<Reaction, "feedback" | "messageId" | "userId">) {
  const reaction = await db.query.reactions.findFirst({
    where: and(
      eq(reactions.messageId, messageId),
      eq(reactions.userId, userId),
      eq(reactions.type, "dislike")
    ),
  });

  return !!reaction;
}
