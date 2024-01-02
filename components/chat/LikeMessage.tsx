"use client";
import { isMessageLikedByUser } from "@/lib/actions";
import { Reaction } from "@/lib/db/schema";
import useFeedBack from "@/lib/hooks/useFeedBack";
import { cn } from "@/lib/utils";
import { Button, Textarea } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BiLike } from "react-icons/bi";

function LikeMessage({
  messageId,
  userId,
  type = "like",
}: Readonly<Pick<Reaction, "type" | "messageId" | "userId">>) {
  const feedbackRef = React.useRef<HTMLTextAreaElement>(null);

  const { addFeedback, isPending, isSuccess } = useFeedBack({
    messageId,
    userId,
    type,
    feedback: feedbackRef.current?.value ?? null,
  });

  const {
    isError,
    data: isLikedMessage,
    isLoading,
  } = useQuery({
    queryKey: ["isLikedMessage", messageId],
    queryFn: async () => {
      return await isMessageLikedByUser({ messageId, userId });
    },
  });

  return (
    <Button
      variant='subtle'
      loading={isLoading}
      leftSection={
        <BiLike
          className={cn("fill-current transition-all", {
            "text-green-500": isLikedMessage,
            "text-gray-500": !isLikedMessage,
          })}
        />
      }
      size='xs'
      onClick={async (e) => {
        e.preventDefault();

        if (isLikedMessage) {
          return;
        }

        modals.openConfirmModal({
          title: (
            <div className='flex items-center space-x-4'>
              <svg
                width='32'
                height='32'
                viewBox='0 0 32 32'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <rect width='32' height='32' rx='8' fill='#BCFFD3' />
                <path
                  d='M12.9883 20.2336L15.0549 21.8336C15.3216 22.1003 15.9216 22.2336 16.3216 22.2336H18.8549C19.6549 22.2336 20.5216 21.6336 20.7216 20.8336L22.3216 15.967C22.6549 15.0336 22.0549 14.2336 21.0549 14.2336H18.3883C17.9883 14.2336 17.6549 13.9003 17.7216 13.4336L18.0549 11.3003C18.1883 10.7003 17.7883 10.0336 17.1883 9.83364C16.6549 9.63364 15.9883 9.9003 15.7216 10.3003L12.9883 14.367'
                  stroke='#04802E'
                  strokeMiterlimit='10'
                />
                <path
                  d='M9.58594 20.2336V13.7003C9.58594 12.7669 9.98594 12.4336 10.9193 12.4336H11.5859C12.5193 12.4336 12.9193 12.7669 12.9193 13.7003V20.2336C12.9193 21.1669 12.5193 21.5003 11.5859 21.5003H10.9193C9.98594 21.5003 9.58594 21.1669 9.58594 20.2336Z'
                  stroke='#04802E'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <h6>Leave a feedback</h6>
            </div>
          ),
          children: (
            <div>
              <p className='mb-4 text-sm'>
                We’re glad to know you’re enjoying Gabeth! Can you please
                provide feedback on what you like about the response?
              </p>
              <Textarea
                autosize
                minRows={2}
                name='feedback'
                placeholder='Enter your response here'
                ref={feedbackRef}
              />
            </div>
          ),
          onCancel: () => addFeedback(),
          onConfirm: () => addFeedback(),
          closeOnConfirm: !isPending,
          labels: {
            confirm: "Send feedback",
            cancel: "Close",
          },
        });
      }}>
      Like
    </Button>
  );
}

export default LikeMessage;
