"use client";
import useUser from "@/lib/hooks/useUser";
import { Avatar } from "@mantine/core";
import React from "react";

function UserAvatar() {
  const { user, isLoading } = useUser();

  if (isLoading) {
    return <div className='animate-pulse h-8 w-8  bg-slate-700 rounded-full' />;
  }

  return (
    <Avatar
      size={"sm"}
      src={
        user?.image || "https://avatars.githubusercontent.com/u/36913813?v=4"
      }
    />
  );
}

export default UserAvatar;
