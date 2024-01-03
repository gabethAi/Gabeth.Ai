"use client";
import ChatWrapper from "./ChatWrapper";
import ChatPanel from "./ChatPanel";
import { Message as MessageType } from "ai";
import useChatManager from "@/lib/hooks/useChatManager";
import { Message } from "@/lib/db/schema";

interface ChatSectionProps {
  id: string;
  initialMessages: MessageType[];
}

function ChatSection({ id, initialMessages }: Readonly<ChatSectionProps>) {
  const {
    messages,
    input,
    isLoading,
    append,
    reload,
    handleInputChange,
    handleSubmit,
  } = useChatManager({
    id,
    body: {
      id,
    },
    initialMessages,
    onFinish(message) {},
  });

  return (
    <div className='relative  h-full'>
      <ChatWrapper
        append={append}
        messages={messages as Message[]}
        isLoading={isLoading}
        reload={reload}
      />
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
