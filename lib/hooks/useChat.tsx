"use client";
import { useQuery } from "@tanstack/react-query";
import { getChatById, getChats, getUser } from "../actions";

function useChat({ chatId }: { chatId: string }) {
  const { data: chat, isLoading } = useQuery({
    queryKey: ["chat", chatId],
    queryFn: async () => {
      const result = await getChatById(chatId);

      console.log(result, "result from useChats");

      return result;
    },
  });
  return { chat, isLoading };
}

export default useChat;
