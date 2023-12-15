import { getChatById, getMessagesByChatId } from "@/lib/actions";
import { ChatPageProps } from "./layout";
import ChatSection from "@/components/chat/ChatSection";
import { Message } from "ai";

// export const runtime = "edge";

export default async function ChatPage({ params }: ChatPageProps) {
  const chat = await getChatById(params.id);
  const chatMessages = await getMessagesByChatId(params.id);

  return (
    <ChatSection
      id={chat?.id as string}
      initialMessages={chatMessages as Message[]}
    />
  );
}
