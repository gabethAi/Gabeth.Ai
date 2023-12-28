"use client";
import { useQuery } from "@tanstack/react-query";
import { fetchChats, getUser } from "../actions";
import { User } from "../db/schema";

function useChats() {
  const { data: chats, isLoading } = useQuery({
    queryKey: ["chats"],
    queryFn: async () => {
      const user = await getUser();
      const result = await fetchChats(user as User);

      return result;
    },
  });
  return { chats, isLoading };
}

export default useChats;
