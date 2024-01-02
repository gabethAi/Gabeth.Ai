"use client";
import { isMessageDislikedByUser } from "@/lib/actions";
import { Reaction } from "@/lib/db/schema";
import useFeedBack from "@/lib/hooks/useFeedBack";
import { cn } from "@/lib/utils";
import { Button, Radio, Textarea } from "@mantine/core";
import { modals } from "@mantine/modals";
import { useQuery } from "@tanstack/react-query";
import React from "react";
import { BiDislike } from "react-icons/bi";

const options = [
  "The response is offensive to me/a social group/an organization.",
  "The response is not factually correct",
  "The response is of no use to me",
];

function DisLikeMessage({
  messageId,
  userId,
  type = "dislike",
}: Readonly<Pick<Reaction, "type" | "messageId" | "userId">>) {
  const feedbackRef = React.useRef<HTMLTextAreaElement | null>(null);
  const { addFeedback, isPending, isSuccess } = useFeedBack({
    messageId,
    userId,
    type,
    feedback: feedbackRef.current?.value ?? null,
  });

  const {
    isError,
    isLoading,
    data: isDisLikedMessage,
  } = useQuery({
    queryKey: ["isDisLikedMessage", messageId],
    queryFn: async () => {
      return await isMessageDislikedByUser({
        messageId,
        userId,
      });
    },
  });

  return (
    <Button
      variant='subtle'
      loading={isLoading}
      leftSection={
        <BiDislike
          className={cn("fill-current transition-all", {
            "text-red-500": isDisLikedMessage,
            "text-gray-500": !isDisLikedMessage,
          })}
        />
      }
      size='xs'
      onClick={async (e) => {
        e.preventDefault();

        if (isDisLikedMessage) {
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
                <rect width='32' height='32' rx='8' fill='#FFA9A9' />
                <path
                  d='M19.0119 11.7666L16.9452 10.1666C16.6785 9.89993 16.0785 9.7666 15.6785 9.7666H13.1452C12.3452 9.7666 11.4785 10.3666 11.2785 11.1666L9.67852 16.0333C9.34519 16.9666 9.94519 17.7666 10.9452 17.7666H13.6119C14.0119 17.7666 14.3452 18.0999 14.2785 18.5666L13.9452 20.6999C13.8119 21.2999 14.2119 21.9666 14.8119 22.1666C15.3452 22.3666 16.0119 22.0999 16.2785 21.6999L19.0119 17.6333'
                  stroke='#C91111'
                  strokeMiterlimit='10'
                />
                <path
                  d='M22.4115 11.7667V18.3C22.4115 19.2333 22.0115 19.5667 21.0781 19.5667H20.4115C19.4781 19.5667 19.0781 19.2333 19.0781 18.3V11.7667C19.0781 10.8333 19.4781 10.5 20.4115 10.5H21.0781C22.0115 10.5 22.4115 10.8333 22.4115 11.7667Z'
                  stroke='#C91111'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>

              <h6>Leave a feedback</h6>
            </div>
          ),
          children: (
            <div>
              <div className='mb-4'>
                <p className='mb-4 text-sm'>
                  We apologize for your experience with Gabeth! Can you please
                  provide feedback on what you dislike about the response?
                </p>

                <Radio.Group
                  onChange={(value) => {
                    if (feedbackRef.current) {
                      feedbackRef.current.value = value;
                    }
                  }}>
                  <div className='space-y-3'>
                    {options.map((option) => (
                      <Radio
                        checked={feedbackRef.current?.value === option}
                        key={option}
                        label={option}
                        value={option}
                      />
                    ))}
                  </div>
                </Radio.Group>
              </div>
              <Textarea
                autosize
                minRows={2}
                name='feedback'
                ref={feedbackRef}
                placeholder='Can’t find your issue in among the options? Enter it here                '
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
      Dislike
    </Button>
  );
}

export default DisLikeMessage;
