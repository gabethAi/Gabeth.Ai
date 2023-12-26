"use client";
import { notifications } from "@mantine/notifications";
import { Message } from "ai";
import { useChat } from "ai/react";

interface UseChatManagerProps {
  id?: string;
  body?: object;
  initialMessages?: Message[];
  onResponse?: (response: any) => void;
  onFinish?: (message: Message) => void;
  onError?: (error: any) => void;
}

/**
 * Custom hook for managing chat functionality.
 *
 * @param {UseChatManagerProps} options - The options for configuring the chat manager.
 * @returns {Object} - An object containing the chat manager functions and state.
 */
function useChatManager({
  id,
  body,
  initialMessages,
  onResponse,
  onFinish,
  onError,
}: UseChatManagerProps) {
  const {
    messages,
    append,
    reload,
    stop,
    error,
    isLoading,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
  } = useChat({
    api: "/api/chat",
    id,
    body: body,
    initialMessages: initialMessages,
    onResponse(response) {
      if (onResponse) {
        onResponse(response);
      }
    },
    async onFinish(message) {
      if (onFinish) {
        onFinish(message);
      }
    },
    onError(error) {
      console.error(error, "error");
      if (onError) {
        onError(error);
      }

      notifications.show({
        title: "Error",
        message: "Something went wrong. Please try again.",
        color: "red",
      });
    },
  });

  return {
    messages,
    append,
    reload,
    stop,
    error,
    isLoading,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
  };
}

export default useChatManager;
