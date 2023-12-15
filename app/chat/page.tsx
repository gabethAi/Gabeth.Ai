import { nanoid } from "ai";
import ChatSection from "../../components/chat/Chat";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gabeth.AI | Chat",
  description: "Chat with Gabeth.AI",
};

// export const runtime = "edge";

function Chat() {
  const id = nanoid();
  return <ChatSection id={id} />;
}

export default Chat;
