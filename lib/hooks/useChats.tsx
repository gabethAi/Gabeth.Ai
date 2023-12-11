"use client";
import { useQuery } from "@tanstack/react-query";
import { getChats, getUser } from "../actions";

function useChats() {
  const { data: chats, isLoading } = useQuery({
    queryKey: ["chats"],
    queryFn: async () => {
      const result = await getChats();

      console.log(result, "result from useChats");

      return result;
    },
  });
  return { chats, isLoading };
}

export default useChats;
