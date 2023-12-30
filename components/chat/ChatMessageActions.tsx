"use client";

import { useCopyToClipboard } from "@/lib/hooks/UseCopytoClipboard";
import { cn } from "@/lib/utils";
import { Button, CheckIcon } from "@mantine/core";
import { motion } from "framer-motion";
import { type Message } from "ai";
import { BiCopy, BiDislike, BiLike } from "react-icons/bi";
import LikeMessage from "./LikeMessage";
import useUser from "@/lib/hooks/useUser";

interface ChatMessageActionsProps extends React.ComponentProps<"div"> {
  readonly message: Message;
}

export function ChatMessageActions({
  message,
  className,
  ...props
}: ChatMessageActionsProps) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });
  const { user } = useUser();
  const isLike = false;
  const isDislike = false;

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(message.content);
  };

  const likeMessage = () => {};

  const dislikeMessage = () => {};

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{
        duration: 0.5, // Animation duration is 0.5 seconds
        ease: "easeOut", // Use 'easeOut' easing function
      }}
      className={cn(
        "flex items-center justify-end transition-opacity",
        className
      )}>
      <div className='flex items-center gap-x-2 md:gap-x-4 '>
        <Button
          variant='subtle'
          leftSection={isCopied ? <CheckIcon /> : <BiCopy />}
          size='icon'
          onClick={onCopy}>
          {isCopied ? "Copied" : "Copy"}
        </Button>

        {message.role !== "user" && (
          <div className='flex items-center gap-x-2 md:gap-x-4'>
            <LikeMessage
              messageId={message.id}
              userId={user?.email as string}
              type='like'
            />

            <Button
              variant='subtle'
              leftSection={<BiDislike />}
              size='icon'
              onClick={dislikeMessage}>
              Dislike
            </Button>
          </div>
        )}
      </div>
    </motion.div>
  );
}
