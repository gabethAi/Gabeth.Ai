"use client";
import ChatWrapper from "./ChatWrapper";
import ChatPanel from "./ChatPanel";
import { Message } from "ai";
import useChatManager from "@/lib/hooks/useChatManager";

function ChatSection({
  id,
  initialMessages,
}: {
  readonly id: string;
  initialMessages: Message[];
}) {
  const {
    messages,
    input,
    isLoading,
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
