"use client";
import React from "react";
import { useIntersection } from "@mantine/hooks";

interface Props {
  trackVisibility?: boolean;
  containerRef: React.RefObject<HTMLDivElement>;
}

/**
 * Custom hook that provides functionality to scroll to the bottom of a container.
 * @param {Object} options - The options for the hook.
 * @param {boolean} options.trackVisibility - Flag indicating whether to track visibility of the container.
 * @param {React.RefObject} options.containerRef - Reference to the container element.
 * @returns {Object} - An object containing the necessary references and functions for scrolling to the bottom.
 */
function useScrollToBottom({ trackVisibility, containerRef }: Readonly<Props>) {
  const { ref, entry } = useIntersection({
    root: containerRef.current,
    threshold: 1,
  });

  React.useEffect(() => {
    if (trackVisibility && !entry?.isIntersecting) {
      entry?.target?.scrollIntoView();
    }
  }, [entry?.isIntersecting, entry?.target, trackVisibility]);

  const scrollToBottom = () =>
    entry?.target?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });

  return { ref, observedRef: ref, scrollToBottom };
}

export default useScrollToBottom;
