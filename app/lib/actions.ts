import prisma from "../prisma/db";

// Get a single chat by its ID
export async function getChat(chatId: string) {
  return await prisma.conversation.findUnique({
    where: { id: chatId },
    include: {
      messages: true,
      user: true,
    },
  });
}

// Get multiple chats for a user by their userID
export async function getChats(userId: string) {
  return await prisma.conversation.findMany({
    where: { userId: userId },
    include: {
      messages: true,
      user: true,
    },
  });
}

// Get a user by their email
export async function getUser(email: string) {
  return await prisma.user.findUnique({
    where: { email: email },
  });
}

// function to register a new user
export async function registerUser({
  email,
  username,
  password,
}: {
  email: string;
  username: string;
  password: string;
}) {
  return await prisma.user.create({
    data: {
      email: email,
      username: username,
      hashedPassword: password,
    },
  });
}

// function to authenticate user login
export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  return await prisma.user.findFirst({
    where: {
      email: email,
      hashedPassword: password,
    },
  });
}

// Clears all chats for a user
export async function clearChats(userId: string) {
  return await prisma.conversation.deleteMany({
    where: { userId: userId },
  });
}

// Removes a specific chat by its ID
export async function removeChat(chatId: string) {
  return await prisma.conversation.delete({
    where: { id: chatId },
  });
}

// async function main() {
//   console.log("starting");
// }

// main()
//   .then(async () => {
//     await prisma.$disconnect();
//   })
//   .catch(async (e) => {
//     console.error(e);
//     await prisma.$disconnect();
//     process.exit(1);
//   });
