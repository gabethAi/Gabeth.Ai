"use client";

import Image from "next/image";
import ChatWithUsLightSvg from "@/app/assets/brand/chat-with-us-light.svg";
import DarkWithUsLightSvg from "@/app/assets/brand/chat-with-us-dark.svg";

import { useComputedColorScheme } from "@mantine/core";

function ChatWithUs() {
  const computedColorScheme = useComputedColorScheme("dark", {
    getInitialValueInEffect: true,
  });

  const imageSrc =
    computedColorScheme === "dark" ? DarkWithUsLightSvg : ChatWithUsLightSvg;

  return (
    <div className='flex flex-col bg-white dark:bg-[#181818] justify-center items-center p-4 md:p-6'>
      <Image
        src={imageSrc}
        alt='Gabeth.Ai Chat Screen'
        width={960}
        height={600}
      />
    </div>
  );
}

export default ChatWithUs;
