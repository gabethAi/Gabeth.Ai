"use client";
import { ScrollArea } from "@mantine/core";
import React from "react";

function ScrollAreaAutoSize({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <ScrollArea.Autosize className='h-[550px] 2xl:h-[600px]'>
      {children}
    </ScrollArea.Autosize>
  );
}

export default ScrollAreaAutoSize;
