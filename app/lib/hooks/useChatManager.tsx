"use client";
import { Message } from "ai";
import { useChat } from "ai/react";

interface UseChatManagerProps {
  id: string;
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
    isLoading,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
  } = useChat({
    api: "/api/chat",
    id,
    body: {
      id,
    },
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
    },
  });

  return {
    messages,
    append,
    reload,
    stop,
    isLoading,
    input,
    setInput,
    handleInputChange,
    handleSubmit,
  };
}

export default useChatManager;
