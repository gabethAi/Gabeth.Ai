"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchChats } from "../actions";
import { User } from "../db/schema";

function useChats(user: User) {
  const { data: chats, isLoading } = useQuery({
    queryKey: ["chats"],
    queryFn: async () => {
      const result = await fetchChats(user);

      return result;
    },
  });

  if (chats) {
    return { chats, isLoading };
  }

  return { chats: [], isLoading };
}

export default useChats;
