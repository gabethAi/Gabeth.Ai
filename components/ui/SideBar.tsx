// "use server";

import {
  ActionIcon,
  Button,
  Divider,
  Drawer,
  Loader,
  ScrollArea,
  Stack,
} from "@mantine/core";
import Link from "next/link";

import React, { Suspense } from "react";
import { motion } from "framer-motion";
import { useDisclosure } from "@mantine/hooks";
import UpgradeButton from "./UpgradeButton";
import ProfileCard from "./ProfileCard";
import useThemeToggler from "@/lib/hooks/useThemeToggler";
import { SignOut } from "./AuthComponent";
import ClientComponent from "../shared/ClientComponent";
import { getChats } from "@/utils/actions";
import { getUser } from "@/lib/actions";

import { kv } from "@vercel/kv";
import { Chat, User } from "@/lib/types";
import { SidebarList } from "./SideBarList";
import useChats from "@/lib/hooks/useChats";

import { MdOutlineLiveHelp } from "react-icons/md";
import { FiHelpCircle } from "react-icons/fi";
import ConversationList from "../chat/ConversationList";

const variants = {
  open: { opacity: 1, x: 0 },
  collapsed: { opacity: 0, x: "-100%" },
};

interface MobileSideBar {
  open: boolean;
  onClose: () => void;
}

// export function MobileSideBar({ open, onClose }: MobileSideBar) {
//   return (
//     <Drawer opened={open} onClose={onClose}>
//       <div className='grid grid-rows-6 h-full'>
//         <div className='row-span-1'>
//           <div className=''>
//             <h1 className='font-semibold text-2xl'>Gabeth.AI</h1>
//           </div>
//           <Divider my={"md"} />
//           <Button fullWidth>New Chat</Button>
//         </div>

//         <div className='row-span-4'>{/* <ChatList /> */}</div>

//         <div className='row-span-1'>
//           <Divider my={"md"} />
//           <div>
//             <UpgradeButton />

//             {/* <ProfileCard /> */}
//           </div>
//         </div>
//       </div>
//     </Drawer>
//   );
// }

export async function DesktopSideBar() {
  const user = await getUser();

  // console.log(user, "user");

  // const { theme } = useThemeToggler();
  // const [opened, { open, close }] = useDisclosure(true);

  // if (!opened) {
  //   return (
  //     <div className='p-8'>
  //       <ActionIcon onClick={open}>
  //         <svg
  //           width='24'
  //           height='24'
  //           viewBox='0 0 24 24'
  //           fill='none'
  //           xmlns='http://www.w3.org/2000/svg'>
  //           <path
  //             d='M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z'
  //
  //           />
  //           <path
  //             d='M7 22.25C6.59 22.25 6.25 21.91 6.25 21.5V2.5C6.25 2.09 6.59 1.75 7 1.75C7.41 1.75 7.75 2.09 7.75 2.5V21.5C7.75 21.91 7.41 22.25 7 22.25Z'
  //
  //           />
  //         </svg>
  //       </ActionIcon>
  //     </div>
  //   );
  // }

  return (
    <div
      // animate={opened ? "open" : "collapsed"}
      className='relative h-screen dark:bg-black grid grid-cols-7'>
      <div className='col-span-2 border-r dark:border-[#373a40] flex flex-col justify-between py-8'>
        <Stack gap={"xl"} align='center'>
          <ActionIcon variant='default'>
            <svg
              width='24'
              height='24'
              className='fill-dark dark:fill-white'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z' />
              <path d='M7 22.25C6.59 22.25 6.25 21.91 6.25 21.5V2.5C6.25 2.09 6.59 1.75 7 1.75C7.41 1.75 7.75 2.09 7.75 2.5V21.5C7.75 21.91 7.41 22.25 7 22.25Z' />
            </svg>
          </ActionIcon>

          <Divider />

          <Link href={"/"}>
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
          </Link>
        </Stack>

        <Stack gap={"xl"} align='center'>
          <ActionIcon variant='default' aria-label='Help'>
            <MdOutlineLiveHelp />
            {/* <FiHelpCircle /> */}
          </ActionIcon>

          <ActionIcon variant='default' aria-label='Settings'>
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                d='M12 15.75C9.93 15.75 8.25 14.07 8.25 12C8.25 9.93 9.93 8.25 12 8.25C14.07 8.25 15.75 9.93 15.75 12C15.75 14.07 14.07 15.75 12 15.75ZM12 9.75C10.76 9.75 9.75 10.76 9.75 12C9.75 13.24 10.76 14.25 12 14.25C13.24 14.25 14.25 13.24 14.25 12C14.25 10.76 13.24 9.75 12 9.75Z'
                fill='#818181'
              />
              <path
                d='M15.21 22.1903C15 22.1903 14.79 22.1603 14.58 22.1103C13.96 21.9403 13.44 21.5503 13.11 21.0003L12.99 20.8003C12.4 19.7803 11.59 19.7803 11 20.8003L10.89 20.9903C10.56 21.5503 10.04 21.9503 9.42 22.1103C8.79 22.2803 8.14 22.1903 7.59 21.8603L5.87 20.8703C5.26 20.5203 4.82 19.9503 4.63 19.2603C4.45 18.5703 4.54 17.8603 4.89 17.2503C5.18 16.7403 5.26 16.2803 5.09 15.9903C4.92 15.7003 4.49 15.5303 3.9 15.5303C2.44 15.5303 1.25 14.3403 1.25 12.8803V11.1203C1.25 9.66029 2.44 8.47029 3.9 8.47029C4.49 8.47029 4.92 8.30029 5.09 8.01029C5.26 7.72029 5.19 7.26029 4.89 6.75029C4.54 6.14029 4.45 5.42029 4.63 4.74029C4.81 4.05029 5.25 3.48029 5.87 3.13029L7.6 2.14029C8.73 1.47029 10.22 1.86029 10.9 3.01029L11.02 3.21029C11.61 4.23029 12.42 4.23029 13.01 3.21029L13.12 3.02029C13.8 1.86029 15.29 1.47029 16.43 2.15029L18.15 3.14029C18.76 3.49029 19.2 4.06029 19.39 4.75029C19.57 5.44029 19.48 6.15029 19.13 6.76029C18.84 7.27029 18.76 7.73029 18.93 8.02029C19.1 8.31029 19.53 8.48029 20.12 8.48029C21.58 8.48029 22.77 9.67029 22.77 11.1303V12.8903C22.77 14.3503 21.58 15.5403 20.12 15.5403C19.53 15.5403 19.1 15.7103 18.93 16.0003C18.76 16.2903 18.83 16.7503 19.13 17.2603C19.48 17.8703 19.58 18.5903 19.39 19.2703C19.21 19.9603 18.77 20.5303 18.15 20.8803L16.42 21.8703C16.04 22.0803 15.63 22.1903 15.21 22.1903ZM12 18.4903C12.89 18.4903 13.72 19.0503 14.29 20.0403L14.4 20.2303C14.52 20.4403 14.72 20.5903 14.96 20.6503C15.2 20.7103 15.44 20.6803 15.64 20.5603L17.37 19.5603C17.63 19.4103 17.83 19.1603 17.91 18.8603C17.99 18.5603 17.95 18.2503 17.8 17.9903C17.23 17.0103 17.16 16.0003 17.6 15.2303C18.04 14.4603 18.95 14.0203 20.09 14.0203C20.73 14.0203 21.24 13.5103 21.24 12.8703V11.1103C21.24 10.4803 20.73 9.96029 20.09 9.96029C18.95 9.96029 18.04 9.52029 17.6 8.75029C17.16 7.98029 17.23 6.97029 17.8 5.99029C17.95 5.73029 17.99 5.42029 17.91 5.12029C17.83 4.82029 17.64 4.58029 17.38 4.42029L15.65 3.43029C15.22 3.17029 14.65 3.32029 14.39 3.76029L14.28 3.95029C13.71 4.94029 12.88 5.50029 11.99 5.50029C11.1 5.50029 10.27 4.94029 9.7 3.95029L9.59 3.75029C9.34 3.33029 8.78 3.18029 8.35 3.43029L6.62 4.43029C6.36 4.58029 6.16 4.83029 6.08 5.13029C6 5.43029 6.04 5.74029 6.19 6.00029C6.76 6.98029 6.83 7.99029 6.39 8.76029C5.95 9.53029 5.04 9.97029 3.9 9.97029C3.26 9.97029 2.75 10.4803 2.75 11.1203V12.8803C2.75 13.5103 3.26 14.0303 3.9 14.0303C5.04 14.0303 5.95 14.4703 6.39 15.2403C6.83 16.0103 6.76 17.0203 6.19 18.0003C6.04 18.2603 6 18.5703 6.08 18.8703C6.16 19.1703 6.35 19.4103 6.61 19.5703L8.34 20.5603C8.55 20.6903 8.8 20.7203 9.03 20.6603C9.27 20.6003 9.47 20.4403 9.6 20.2303L9.71 20.0403C10.28 19.0603 11.11 18.4903 12 18.4903Z'
                fill='#818181'
              />
            </svg>
          </ActionIcon>
        </Stack>
      </div>

      <div className='col-span-5 flex flex-col p-5 gap-y-8 divide-y '>
        <div className='grid grid-rows-6 h-full'>
          <div className='row-span-1'>
            <div className=''>
              <h1 className='font-semibold text-2xl'>Gabeth.AI</h1>
            </div>
            <Divider my={"md"} />
            <Link href={"/chat"}>
              {" "}
              <Button fullWidth>New Chat</Button>
            </Link>
          </div>

          <div className='row-span-4'>
            <Suspense
              fallback={
                <div className='flex justify-center items-center h-full'>
                  <Loader />
                </div>
              }>
              <ConversationList />
            </Suspense>
          </div>

          <div className='row-span-1 '>
            <Divider my={"md"} />
            <Stack gap={"lg"} align='flex-start'>
              <UpgradeButton />

              <ProfileCard user={user as User} />
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}
