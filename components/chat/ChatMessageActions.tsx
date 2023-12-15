"use client";

import { useCopyToClipboard } from "@/lib/hooks/UseCopytoClipboard";
import { cn } from "@/lib/utils";
import { Button, CheckIcon } from "@mantine/core";
import { type Message } from "ai";
import { BiCopy, BiDislike, BiLike } from "react-icons/bi";

interface ChatMessageActionsProps extends React.ComponentProps<"div"> {
  readonly message: Message;
}

export function ChatMessageActions({
  message,
  className,
  ...props
}: ChatMessageActionsProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });
  const isLike = false;
  const isDislike = false;

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(message.content);
  };

  const likeMessage = () => {};

  const dislikeMessage = () => {};

  return (
    <div
      className={cn(
        "flex items-center justify-end transition-opacity group-hover:opacity-100 md:absolute md:-right-10 md:-top-2 md:opacity-0",
        className
      )}>
      <div className='flex items-center gap-x-4 '>
        <Button
          variant='ghost'
          leftSection={isCopied ? <CheckIcon /> : <BiCopy />}
          size='icon'
          onClick={onCopy}>
          <span className='sr-only'>Copy message</span>
        </Button>

        {message.role !== "user" && (
          <div className='flex items-center gap-x-4'>
            <Button
              variant='ghost'
              leftSection={<BiLike />}
              size='icon'
              onClick={likeMessage}>
              Like
            </Button>

            <Button
              variant='ghost'
              leftSection={<BiDislike />}
              size='icon'
              onClick={dislikeMessage}>
              Dislike
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
