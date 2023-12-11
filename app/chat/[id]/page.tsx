import ChatWrapper from "@/components/chat/ChatWrapper";
import { getChatById, getMessagesByChatId } from "@/lib/actions";
import { ChatPageProps } from "./layout";
import { redirect } from "next/navigation";
import { Message } from "ai";

// export const runtime = "edge";

export default async function ChatPage({ params }: ChatPageProps) {
  const chat = await getChatById(params.id);
  const chatMessages = await getMessagesByChatId(params.id);

  if (!chat) {
    redirect("/chat");
  }

  return (
    <ChatWrapper id={chat?.id} initialMessages={chatMessages as Message[]} />
  );
}
