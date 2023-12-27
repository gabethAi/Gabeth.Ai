"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchChatById } from "../actions";

function useChat({ chatId }: { chatId: string }) {
  const { data, isLoading } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      const result = await fetchChatById(chatId);

      return result;
    },
  });
  return { data, isLoading };
}

export default useChat;
