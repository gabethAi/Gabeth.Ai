"use client";
import { getChats } from "@/app/utils/actions";
import { useQuery } from "@tanstack/react-query";
import { getUser } from "../actions";

function useChats() {
  const { data: chats, isLoading } = useQuery({
    queryKey: ["chats"],
    queryFn: async () => {
      const user = await getUser();
      const result = await getChats(user.email);

      console.log(result, "result from useChats");

      return result;
    },
  });
  return { chats, isLoading };
}

export default useChats;
