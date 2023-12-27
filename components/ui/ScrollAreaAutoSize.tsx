"use client";
import { ScrollArea } from "@mantine/core";
import React from "react";

function ScrollAreaAutoSize({ children }: { children: React.ReactNode }) {
  return (
    <ScrollArea.Autosize className='h-[400px] md:max-h-[400px] xl:max-h-[450px] 2xl:max-h-[620px]'>
      {children}
    </ScrollArea.Autosize>
  );
}

export default ScrollAreaAutoSize;
