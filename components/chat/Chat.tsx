"use client";
import { useRouter } from "next/navigation";
import ChatWrapper from "./ChatWrapper";
import ChatPanel from "./ChatPanel";
import EmptyScreen from "./EmptyScreen";
import useChatManager from "@/lib/hooks/useChatManager";

/**
 * Component for rendering a chat.
 * @param id - The ID of the chat.
 */

function Chat({ id }: { readonly id: string }) {
  const router = useRouter();
  const {
    messages,
    input,
    isLoading,
    setInput,
    reload,
    handleInputChange,
    handleSubmit,
  } = useChatManager({
    body: {
      id,
    },
    // onFinish(message) {
    //   router.push(`/chat/${id}`);
    // },
  });
  return (
    <div className='relative  h-full'>
      {messages.length > 0 ? (
        <ChatWrapper id={id} messages={messages} isLoading={isLoading} />
      ) : (
        <div className='pt-16 lg:pt-32 xl:pt-36'>
          <EmptyScreen setInput={setInput} handleSubmit={handleSubmit} />
        </div>
      )}

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

export default Chat;
