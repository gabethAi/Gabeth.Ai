"use client";
import { Message } from "ai";
import { useChat } from "ai/react";
import React from "react";
import ChatPanel from "./ChatPanel";
import EmptyScreen from "./EmptyScreen";
import ChatList from "./ChatList";

import { notifications } from "@mantine/notifications";
import ChatScrollAnchor from "./ChatScrollAnchor";

export interface ChatProps extends React.ComponentProps<"div"> {
  readonly initialMessages?: Message[];
  readonly id?: string;
}

function ChatWrapper({ id, initialMessages, className }: ChatProps) {
  const {
    messages,
    append,
    reload,
    stop,
    isLoading,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
  } = useChat({
    api: "/api/chat",
    onResponse(response) {
      if (response.status === 401) {
        notifications.show({
          color: "red",
          title: "An error occurred",
          message: response.statusText,
        });
      }
    },
    onFinish(message) {
      console.log(message, "message from onFinish");
    },
    onError(error) {
      console.log(error, "error");
    },
  });

  return (
    <>
      {messages.length ? (
        <div>
          <ChatList messages={messages} />
          <ChatScrollAnchor trackVisibility={isLoading} />
        </div>
      ) : (
        <EmptyScreen setInput={setInput} />
      )}

      <ChatPanel
        id={id}
        isLoading={isLoading}
        stop={stop}
        append={append}
        reload={reload}
        messages={messages}
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
      />
    </>
  );
}

export default ChatWrapper;
