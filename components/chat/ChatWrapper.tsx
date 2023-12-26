"use client";
import { Message } from "ai";
import React, { useRef } from "react";
import ChatList from "./ChatList";

import { ActionIcon, Paper } from "@mantine/core";
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

  const { ref, scrollToBottom } = useScrollToBottom({
    trackVisibility: isLoading,
    containerRef: containerRef,
  });

  if (!messages) {
    return null;
  }

  return (
    <div className='relative '>
      <Paper
        ref={containerRef}
        style={{ overflowY: "scroll" }}
        className={cn("pt-4 md:pt-10 pb-10 h-[70dvh] md:h-[75dvh]", className)}>
        <ChatList messages={messages} isLoading={isLoading} />
        <div ref={ref} className='h-px w-full' />
      </Paper>

      <div className='absolute bottom-[-30px] z-20 inset-x-0 flex items-center justify-center w-full'>
        <ActionIcon
          size={"lg"}
          variant='outline'
          onClick={() => scrollToBottom()}>
          <FaArrowDown />
        </ActionIcon>
      </div>
    </div>
  );
}

export default ChatWrapper;
