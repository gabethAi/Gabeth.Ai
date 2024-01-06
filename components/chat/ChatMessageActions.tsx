"use client";

import { useCopyToClipboard } from "@/lib/hooks/UseCopytoClipboard";
import { cn } from "@/lib/utils";
import { Button } from "@mantine/core";
import { motion } from "framer-motion";
import { BiCheck, BiCopy } from "react-icons/bi";
import LikeMessage from "./LikeMessage";
import useUser from "@/lib/hooks/useUser";
import DisLikeMessage from "./DisLikeMessage";
import { Message } from "@/lib/db/schema";
import ReloadMessage from "./ReloadMessage";
import { UseChatHelpers } from "ai/react";

interface ChatMessageActionsProps extends Pick<UseChatHelpers, "reload"> {
  message: Message;
  className?: string;
}

export function ChatMessageActions({
  message,
  className,
  reload,
}: Readonly<ChatMessageActionsProps>) {
  const { isCopied, copyToClipboard } = useCopyToClipboard({ timeout: 2000 });
  const { user } = useUser();

  const onCopy = () => {
    if (isCopied) return;
    copyToClipboard(message.content);
  };

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
      <div className='flex items-center justify-end gap-x-2 md:gap-x-4 '>
        <Button
          variant='subtle'
          leftSection={isCopied ? <BiCheck /> : <BiCopy />}
          size='xs'
          onClick={onCopy}>
          {isCopied ? "Copied" : "Copy"}
        </Button>

        {message.role !== "user" && (
          <div className='flex items-center gap-x-2 md:gap-x-4'>
            <LikeMessage
              messageId={message.id}
              userId={user?.id as string}
              type='like'
            />

            <DisLikeMessage
              messageId={message.id}
              userId={user?.id as string}
              type='dislike'
            />

            <ReloadMessage reload={reload} message={message} />
          </div>
        )}
      </div>
    </motion.div>
  );
}
