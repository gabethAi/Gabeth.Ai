"use client";
import React from "react";
import { useAtBottom } from "./UseAtBottom";
import { useIntersection } from "@mantine/hooks";

interface Props {
  readonly trackVisibility?: boolean;
  containerRef: React.RefObject<HTMLDivElement> | null;
}

function useScrollToBottom({ containerRef, trackVisibility }: Props) {
  const isAtBottom = useAtBottom();
  const { ref, entry } = useIntersection({
    root: containerRef?.current,
    rootMargin: "0px 0px -150px 0px",
    threshold: 1,
  });

  React.useEffect(() => {
    if (isAtBottom && trackVisibility) {
      entry?.target.scrollIntoView({
        block: "start",
      });
    }
  }, [entry, isAtBottom, trackVisibility]);

  const scrollToBottom = () => {
    entry?.target.scrollIntoView({
      block: "start",
    });
  };
  return { ref, scrollToBottom };
}

export default useScrollToBottom;
