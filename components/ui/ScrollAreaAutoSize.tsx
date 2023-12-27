"use client";
import { ScrollArea } from "@mantine/core";
import React from "react";

function ScrollAreaAutoSize({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <ScrollArea.Autosize className='h-[400px] lg:h-[450px] 2xl:h-[550px]'>
      {children}
    </ScrollArea.Autosize>
  );
}

export default ScrollAreaAutoSize;
