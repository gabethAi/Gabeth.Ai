"use client";
import { useRouter } from "next/navigation";
import ChatWrapper from "./ChatWrapper";
import ChatPanel from "./ChatPanel";
import useChatManager from "@/app/lib/hooks/useChatManager";
import EmptyScreen from "./EmptyScreen";

/**
 * Component for rendering a chat.
 * @param id - The ID of the chat.
 */

function Chat({ id }: { readonly id: string }) {
  const router = useRouter();
  const { messages, setInput } = useChatManager({
    id: id,
  });

  return (
    <div className='relative h-full'>
      {messages.length ? (
        <ChatWrapper id={id} initialMessages={messages} />
      ) : (
        <div className='h-full p-3 flex flex-col justify-center'>
          <EmptyScreen setInput={setInput} />
        </div>
      )}

      <div className='z-10 absolute bottom-0 inset-x-0'>
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
