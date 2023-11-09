"use client";

import { useCopyToClipboard } from "@/app/lib/hooks/UseCopytoClipboard";
import { cn } from "@/app/lib/utils";
import { Button, CheckIcon } from "@mantine/core";
import { type Message } from "ai";
import { BiCopy } from "react-icons/bi";

// import { IconCheck, IconCopy } from '@/components/ui/icons'

interface ChatMessageActionsProps extends React.ComponentProps<"div"> {
  readonly message: Message;
}

export function ChatMessageActions({
  message,
  className,
  ...props
}: ChatMessageActionsProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(message.content);
  };

  return (
    <div
      className={cn(
        "flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0",
        className
      )}
      {...props}>
      <Button variant='ghost' size='icon' onClick={onCopy}>
        {isCopied ? <CheckIcon /> : <BiCopy />}
        <span className='sr-only'>Copy message</span>
      </Button>
    </div>
  );
}
