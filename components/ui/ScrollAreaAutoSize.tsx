"use client";
import { ScrollArea } from "@mantine/core";
import React from "react";

function ScrollAreaAutoSize({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea.Autosize className=' max-h-[400px] xl:max-h-[450px] 2xl:max-h-[600px]'>
      {children}
    </ScrollArea.Autosize>
  );
}

export default ScrollAreaAutoSize;
