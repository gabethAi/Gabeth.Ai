import { Message } from "ai";
import React from "react";
import ChatList from "./ChatList";

import ChatScrollAnchor from "./ChatScrollAnchor";
import { ScrollArea } from "@mantine/core";
import { cn } from "@/lib/utils";

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
  if (!messages) {
    return null;
  }

  return (
    <ScrollArea h={"80dvh"} className={cn("pt-4 md:pt-10 pb-10", className)}>
      <ChatList messages={messages} />
      <ChatScrollAnchor trackVisibility={isLoading} />
    </ScrollArea>
  );
}

export default ChatWrapper;
