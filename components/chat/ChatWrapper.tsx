"use client";
import { Message } from "ai";
import React, { useRef } from "react";
import ChatList from "./ChatList";

import { ActionIcon, Box, Paper } from "@mantine/core";
import { cn } from "@/lib/utils";
import useScrollToBottom from "@/lib/hooks/useScrollToBottom";

import { FaArrowDown } from "react-icons/fa";

export interface ChatProps extends React.ComponentProps<"div"> {
  messages: Message[];
  isLoading?: boolean;
}

/**
 * Renders a chat wrapper component.
 *
 * @param messages - The array of chat messages.
 * @param isLoading - A boolean indicating whether the chat is currently loading.
 * @param className - Additional CSS class names for the component.
 * @returns The rendered chat wrapper component.
 */
function ChatWrapper({ messages, isLoading, className }: Readonly<ChatProps>) {
  const containerRef = useRef<HTMLDivElement>(null);

  const { ref, isBottom, scrollToBottom } = useScrollToBottom({
    trackVisibility: isLoading,
    containerRef: containerRef,
  });

  const showScrollToBottom = !isBottom && !isLoading;

  if (!messages) {
    return null;
  }

  return (
    <div className='relative '>
      <Box
        ref={containerRef}
        style={{ overflowY: "scroll" }}
        className={cn("md:pt-10 h-[70dvh] ", className)}>
        <ChatList messages={messages} isLoading={isLoading} />
        <div ref={ref} />
      </Box>

      {showScrollToBottom && (
        <div className='absolute bottom-[-40px] lg:bottom-[-60px] z-20 inset-x-0 flex items-center justify-center w-full'>
          <ActionIcon
            size={"lg"}
            variant='outline'
            onClick={() => scrollToBottom()}>
            <FaArrowDown />
          </ActionIcon>
        </div>
      )}
    </div>
  );
}

export default ChatWrapper;
