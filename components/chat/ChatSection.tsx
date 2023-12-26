"use client";
import ChatWrapper from "./ChatWrapper";
import ChatPanel from "./ChatPanel";
import { Message } from "ai";
import useChatManager from "@/lib/hooks/useChatManager";

interface ChatSectionProps {
  id: string;
  initialMessages: Message[];
}

function ChatSection({ id, initialMessages }: Readonly<ChatSectionProps>) {
  const {
    messages,
    input,
    isLoading,
    error,
    setInput,
    reload,
    handleInputChange,
    handleSubmit,
  } = useChatManager({
    id,
    body: {
      id,
    },
    initialMessages,
  });

  console.log(error, "error");

  return (
    <div className='relative  h-full'>
      <ChatWrapper messages={messages} isLoading={isLoading} />
      <div className='absolute bottom-0 inset-x-0'>
        <ChatPanel
          reload={reload}
          messages={messages}
          handleInputChange={handleInputChange}
          handleSubmit={handleSubmit}
          input={input}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}

export default ChatSection;
