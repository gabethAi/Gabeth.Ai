"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchChats } from "../actions";

function useChats() {
  const { data: chats, isLoading } = useQuery({
    queryKey: ["chats"],
    queryFn: async () => {
      const result = await fetchChats();

      return result;
    },
  });

  if (chats) {
    return { chats, isLoading };
  }

  return { chats: [], isLoading };
}

export default useChats;
