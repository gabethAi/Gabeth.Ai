"use client";
import { Message } from "ai";
import React from "react";
import ChatList from "./ChatList";

import ChatScrollAnchor from "./ChatScrollAnchor";
import { Button, ScrollArea } from "@mantine/core";
import { cn } from "@/lib/utils";
import useScrollToBottom from "@/lib/hooks/useScrollToBottom";

export interface ChatProps extends React.ComponentProps<"div"> {
  readonly messages: Message[];
  readonly isLoading?: boolean;
}

/**
 * Renders the chat wrapper component.
 *
 * @param id - The ID of the chat.
 * @param messages - The initial messages to display in the chat.
 * @param className - The CSS class name for the chat wrapper.
 * @returns The rendered chat wrapper component.
 */

function ChatWrapper({ messages, isLoading, className }: ChatProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const { ref, scrollToBottom } = useScrollToBottom({
    containerRef,
    trackVisibility: isLoading,
  });

  if (!messages) {
    return null;
  }

  return (
    <div>
      <ScrollArea
        h={"80dvh"}
        ref={ref}
        className={cn("pt-4 md:pt-10 pb-10", className)}>
        <ChatList messages={messages} isLoading={isLoading} />
      </ScrollArea>

      {/* <div className='flex justify-center py-2'>
        <Button
          variant='outline'
          className='rounded-full'
          onClick={scrollToBottom}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6 text-gray-400'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'>
            <path d='M19 14l-7 7m0 0l-7-7m7 7V3' />
          </svg>
        </Button>
      </div> */}
    </div>
  );
}

export default ChatWrapper;
