import ChatWrapper from "@/components/chat/ChatWrapper";
import { getUser } from "@/lib/actions";
import { getChat } from "@/utils/actions";
import { ScrollArea } from "@mantine/core";
import { ChatPageProps } from "./layout";
import { notFound } from "next/navigation";

export const runtime = "edge";

export default async function ChatPage({ params }: ChatPageProps) {
  const user = await getUser();

  const chat = await getChat(params.id, user.id);

  if (!chat) {
    notFound();
  }

  return <ChatWrapper id={chat.id} initialMessages={chat.messages} />;
}
