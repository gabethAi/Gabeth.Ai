"use client";
import { useMutation } from "@tanstack/react-query";
import { ReactionProps } from "../types";
import { addReaction } from "../actions";
import { queryClient } from "@/context/QueryClientProvider";

function useFeedBack({
  messageId,
  userId,
  type = "like",
}: Pick<ReactionProps, "type" | "feedback" | "messageId" | "userId">) {
  const {
    mutate: addFeedback,
    isIdle,
    isPending,
    isSuccess,
  } = useMutation({
    mutationKey: ["addFeedback", messageId],
    mutationFn: async (feedback?: string) => {
      const result = await addReaction({
        messageId,
        userId,
        type,
        feedback,
      });

      return result;
    },
    onSuccess: () => {
      if (type === "like") {
        queryClient.invalidateQueries({
          queryKey: ["isLikedMessage", messageId],
        });
      } else {
        queryClient.invalidateQueries({
          queryKey: ["isDisLikedMessage", messageId],
        });
      }
    },
  });

  return { addFeedback, isIdle, isPending, isSuccess };
}

export default useFeedBack;
