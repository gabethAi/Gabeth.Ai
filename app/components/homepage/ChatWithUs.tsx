import Image from "next/image";
import ChatWithUsLightSvg from "@/app/assets/brand/chat-with-us-light.svg";
import DarkWithUsLightSvg from "@/app/assets/brand/chat-with-us-dark.svg";

function ChatWithUs() {
  return (
    <div className='flex flex-col bg-white dark:bg-[#181818] justify-center items-center p-4 md:p-6'>
      {/* image in dark mode */}
      <Image
        className='hidden dark:block'
        src={DarkWithUsLightSvg}
        alt='Gabeth.Ai Chat Screen'
        width={960}
        height={600}
      />

      {/* image in light mode */}
      <Image
        className='block dark:hidden'
        src={ChatWithUsLightSvg}
        alt='Gabeth.Ai Chat Screen'
        width={960}
        height={600}
      />
    </div>
  );
}

export default ChatWithUs;
