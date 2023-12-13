"use client";

import { cn } from "@/lib/utils";
import { NavLink } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ActiveNavLink from "./ActiveNavLink";
import { Chat } from "@/lib/db/schema";

interface SidebarItemProps {
  chat: Chat;
  children: React.ReactNode;
}

/**
 * Renders a sidebar item for a chat.
 *
 * @param {SidebarItemProps} props - The props for the sidebar item.
 * @returns {JSX.Element | null} The rendered sidebar item.
 */

function SideBarItem({ chat, children }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === chat.path;
  if (!chat?.id) return null;

  return (
    <div title={chat.title}>
      <NavLink
        href={chat.path}
        //   noWrap
        label={
          <span className='flex-1 select-none overflow-hidden text-ellipsis break-normal'>
            {chat.title}
          </span>
        }
        active={isActive}
      />

      {isActive && <div className='absolute right-2 top-1'>{children}</div>}
    </div>
  );
}

export default SideBarItem;
