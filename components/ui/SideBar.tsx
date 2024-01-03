"use client";
import { ActionIcon, Button, Divider, Stack } from "@mantine/core";
import Link from "next/link";

import UpgradeButton from "./UpgradeButton";
import ProfileCard from "./ProfileCard";

import { motion } from "framer-motion";

import ConversationList from "../chat/ConversationList";
import { cn } from "@/lib/utils";
import Logo from "../shared/Logo";
import Settings from "./Settings";
import { Chat, User } from "@/lib/db/schema";
import LeaveFeedback from "./LeaveFeedback";
import { useDisclosure } from "@mantine/hooks";

const variants = {
  open: { opacity: 1, x: 0 },
  collapsed: { opacity: 0, x: "-100%" },
};

interface DesktopSideBarProps {
  user: User;
  chats: Chat[];
  className?: string;
}

export function DesktopSideBar({
  user,
  chats,
  className,
}: Readonly<DesktopSideBarProps>) {
  const [opened, { open, close }] = useDisclosure(true);

  if (!opened) {
    return (
      <div className='px-14 py-8'>
        <ActionIcon onClick={open} variant='default'>
          <svg
            width='24'
            height='24'
            className='fill-black dark:fill-white'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z' />
            <path d='M7 22.25C6.59 22.25 6.25 21.91 6.25 21.5V2.5C6.25 2.09 6.59 1.75 7 1.75C7.41 1.75 7.75 2.09 7.75 2.5V21.5C7.75 21.91 7.41 22.25 7 22.25Z' />
          </svg>
        </ActionIcon>
      </div>
    );
  }

  return (
    <motion.div
      animate={opened ? "open" : "collapsed"}
      variants={variants}
      className={cn(
        "bg-slate-50 dark:bg-black relative border border-[#ced4da] dark:border-[#424242]  h-full grid grid-cols-7 min-w-[450px]",
        className
      )}>
      <div className='col-span-2 border-r border-[#ced4da] dark:border-[#424242] flex flex-col justify-between py-8'>
        <Stack gap={"xl"} align='center'>
          <ActionIcon variant='default' onClick={close}>
            <svg
              width='24'
              height='24'
              className='fill-black dark:fill-white'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z' />
              <path d='M7 22.25C6.59 22.25 6.25 21.91 6.25 21.5V2.5C6.25 2.09 6.59 1.75 7 1.75C7.41 1.75 7.75 2.09 7.75 2.5V21.5C7.75 21.91 7.41 22.25 7 22.25Z' />
            </svg>
          </ActionIcon>

          <Divider />

          <Link href={"/chat"}>
            <ActionIcon variant='default'>
              <svg
                className='stroke-black dark:stroke-white'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M8.5 19H8C4 19 2 18 2 13V8C2 4 4 2 8 2H16C20 2 22 4 22 8V13C22 17 20 19 16 19H15.5C15.19 19 14.89 19.15 14.7 19.4L13.2 21.4C12.54 22.28 11.46 22.28 10.8 21.4L9.3 19.4C9.14 19.18 8.77 19 8.5 19Z'
                  strokeWidth='1.5'
                  strokeMiterlimit='10'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M15.9965 11H16.0054'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M11.9945 11H12.0035'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M7.99451 11H8.00349'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            </ActionIcon>
          </Link>
        </Stack>

        <Stack gap={"xl"} align='center'>
          <LeaveFeedback />

          <Settings />
        </Stack>
      </div>

      <div className='col-span-5 flex flex-col p-5 relative'>
        <div className='flex flex-col gap-y-6'>
          <div className=''>
            <Link href={"/chat"} className='flex items-center space-x-4'>
              <Logo className='size-8' />
              <h1 className='font-semibold text-2xl'>Gabeth.AI</h1>
            </Link>
            <Divider my={"md"} />
            <Link href={"/chat"}>
              {" "}
              <Button fullWidth>New Chat</Button>
            </Link>
          </div>

          <ConversationList user={user} chats={chats} />

          <div className='absolute bottom-4 inset-x-5'>
            <Divider my={"md"} />
            <Stack gap={"lg"} align='flex-start'>
              <UpgradeButton />

              <ProfileCard user={user} />
            </Stack>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
