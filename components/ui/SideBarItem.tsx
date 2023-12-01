"use client";
import { Chat } from "@/lib/types";
import { cn } from "@/lib/utils";
import { NavLink } from "@mantine/core";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ActiveNavLink from "./ActiveNavLink";

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
    <div>
      <div
        className='relative flex-1 select-none overflow-hidden text-ellipsis break-all'
        title={chat.title}>
        <NavLink
          className='relative flex-1 select-none overflow-hidden text-ellipsis break-all'
          href={chat.path}
          //   noWrap
          label={chat.title.slice(0, 40) + ""}
          active={isActive}
        />

        {isActive && <div className='absolute right-2 top-1'>{children}</div>}
      </div>
    </div>
  );
}

export default SideBarItem;
