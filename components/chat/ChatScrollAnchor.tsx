"use client";

import React, { useRef } from "react";
import { useIntersection } from "@mantine/hooks";
import { useAtBottom } from "@/lib/hooks/UseAtBottom";

interface ChatScrollAnchorProps {
  trackVisibility?: boolean;
}

function ChatScrollAnchor({ trackVisibility }: ChatScrollAnchorProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const isAtBottom = useAtBottom();
  const { ref, entry } = useIntersection({
    root: containerRef.current,
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

  return <div ref={ref} className='h-px w-full' />;
}

export default ChatScrollAnchor;
