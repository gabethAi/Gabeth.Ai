"use client";
import { useRouter } from "next/navigation";
import ChatWrapper from "./ChatWrapper";
import ChatPanel from "./ChatPanel";
import EmptyScreen from "./EmptyScreen";
import { useChat } from "ai/react";
import { notifications } from "@mantine/notifications";

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
  } = useChat({
    api: "/api/chat",
    body: {
      id,
    },
    onResponse(response) {
      // console.log(response, "response");
    },
    async onFinish(message) {
      if (message) {
        router.push(`/chat/${id}`);
      }
    },
    onError(error) {
      console.error(error, "error");
      notifications.show({
        title: "Error",
        message: "Something went wrong. Please try again.",
        color: "red",
      });
    },
  });

  return (
    <div className='relative  h-full'>
      <div className='absolute bottom-0 inset-x-0'>
        {messages.length > 0 ? (
          <ChatWrapper id={id} messages={messages} isLoading={isLoading} />
        ) : (
          <EmptyScreen setInput={setInput} handleSubmit={handleSubmit} />
        )}

        <div className=''>
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
    </div>
  );
}

export default Chat;
