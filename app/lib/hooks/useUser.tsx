"use client";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getUser } from "../actions";

function useUser() {
  const { data: user, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const user = await getUser();

      return user;
    },
  });
  return { user, isLoading };
}

export default useUser;
