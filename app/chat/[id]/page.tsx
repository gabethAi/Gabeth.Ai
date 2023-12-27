import { fetchChatById } from "@/lib/actions";
import { ChatPageProps } from "./layout";
import ChatSection from "@/components/chat/ChatSection";

export default async function ChatPage({ params }: Readonly<ChatPageProps>) {
  const result = await fetchChatById(params.id);

  // console.log(result, "result");

  return (
    <ChatSection id={result.chat?.id} initialMessages={result.chatMessages} />
  );
}
