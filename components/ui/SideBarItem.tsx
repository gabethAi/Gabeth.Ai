"use client";

import { NavLink } from "@mantine/core";
import { usePathname } from "next/navigation";
import React from "react";
import { Chat } from "@/lib/db/schema";

import { motion } from "framer-motion";

interface SidebarItemProps {
  readonly index: number;
  readonly chat: Chat;
  readonly children: React.ReactNode;
}

/**
 * Renders a sidebar item for a chat.
 *
 * @param {SidebarItemProps} props - The props for the sidebar item.
 * @returns {JSX.Element | null} The rendered sidebar item.
 */

function SideBarItem({ index, chat, children }: SidebarItemProps) {
  const pathname = usePathname();
  const isActive = pathname === chat.path;
  const shouldAnimate = index === 0 && isActive;

  if (!chat?.id) return null;

  return (
    <motion.div
      title={chat.title}
      className='relative flex-1 select-none overflow-hidden text-ellipsis break-all '
      variants={{
        initial: {
          height: 0,
          opacity: 0,
        },
        animate: {
          height: "auto",
          opacity: 1,
        },
      }}
      initial={shouldAnimate ? "initial" : undefined}
      animate={shouldAnimate ? "animate" : undefined}
      transition={{
        duration: 0.25,
        ease: "easeIn",
      }}>
      <NavLink
        className='max-w-[15rem] xl:max-w-[19rem]'
        href={chat.path}
        active={isActive}
        label={
          <span className='whitespace-nowrap text-ellipsis break-all overflow-hidden'>
            {shouldAnimate ? (
              chat.title.split("").map((character, index) => (
                <motion.span
                  key={character}
                  variants={{
                    initial: {
                      opacity: 0,
                      x: -100,
                    },
                    animate: {
                      opacity: 1,
                      x: 0,
                    },
                  }}
                  initial={shouldAnimate ? "initial" : undefined}
                  animate={shouldAnimate ? "animate" : undefined}
                  transition={{
                    duration: 0.25,
                    ease: "easeIn",
                    delay: index * 0.05,
                    staggerChildren: 0.05,
                  }}>
                  {character}
                </motion.span>
              ))
            ) : (
              <span>{chat.title}</span>
            )}
          </span>
        }
      />

      {isActive && <div className='absolute right-2 top-1'>{children}</div>}
    </motion.div>
  );
}

export default SideBarItem;
