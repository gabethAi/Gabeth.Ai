"use client";
import { useRouter } from "next/navigation";
import ChatWrapper from "./ChatWrapper";
import ChatPanel from "./ChatPanel";
import useChatManager from "@/lib/hooks/useChatManager";
import EmptyScreen from "./EmptyScreen";
import { useEffect } from "react";

/**
 * Component for rendering a chat.
 * @param id - The ID of the chat.
 */

function Chat({ id }: { readonly id: string }) {
  const router = useRouter();
  const { messages, input, setInput } = useChatManager({
    id: id,
  });

  return (
    <div className='relative h-full'>
      {`Input: ${input}`}

      {messages.length && <ChatWrapper id={id} initialMessages={messages} />}

      <div className='absolute bottom-0 inset-x-0'>
        <EmptyScreen setInput={setInput} />
        <ChatPanel
          id={id}
          initialMessages={messages}
          onFinish={(message) => {
            router.push(`/chat/${id}`, { shallow: true });
            router.refresh();
          }}
        />
      </div>
    </div>
  );
}

export default Chat;
