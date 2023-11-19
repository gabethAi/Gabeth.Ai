// "use client";
import { auth, signOut } from "@/app/lib/auth";
import useThemeToggler from "@/app/lib/hooks/useThemeToggler";
import { ActionIcon, Avatar } from "@mantine/core";
import React from "react";
import { SignOut } from "./AuthComponent";

async function ProfileCard() {
  const session = await auth();
  const user = session?.user;
  // const { theme } = useThemeToggler();
  return (
    <div className='flex items-center'>
      {/* <ActionIcon>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          width='24'
          height='24'
          viewBox='0 0 24 24'
          fill='none'>
          <path
            d='M15.2395 22.2705H15.1095C10.6695 22.2705 8.52953 20.5205 8.15953 16.6005C8.11953 16.1905 8.41953 15.8205 8.83953 15.7805C9.23953 15.7405 9.61953 16.0505 9.65953 16.4605C9.94953 19.6005 11.4295 20.7705 15.1195 20.7705H15.2495C19.3195 20.7705 20.7595 19.3305 20.7595 15.2605V8.74047C20.7595 4.67047 19.3195 3.23047 15.2495 3.23047H15.1195C11.4095 3.23047 9.92953 4.42047 9.65953 7.62047C9.60953 8.03047 9.25953 8.34047 8.83953 8.30047C8.41953 8.27047 8.11953 7.90047 8.14953 7.49047C8.48953 3.51047 10.6395 1.73047 15.1095 1.73047H15.2395C20.1495 1.73047 22.2495 3.83047 22.2495 8.74047V15.2605C22.2495 20.1705 20.1495 22.2705 15.2395 22.2705Z'
            fill={theme === "dark" ? "white" : "#0A0A0A"}
          />
          <path
            d='M15.0001 12.75H3.62012C3.21012 12.75 2.87012 12.41 2.87012 12C2.87012 11.59 3.21012 11.25 3.62012 11.25H15.0001C15.4101 11.25 15.7501 11.59 15.7501 12C15.7501 12.41 15.4101 12.75 15.0001 12.75Z'
            fill={theme === "dark" ? "white" : "#0A0A0A"}
          />
          <path
            d='M5.85043 16.0998C5.66043 16.0998 5.47043 16.0298 5.32043 15.8798L1.97043 12.5298C1.68043 12.2398 1.68043 11.7598 1.97043 11.4698L5.32043 8.11984C5.61043 7.82984 6.09043 7.82984 6.38043 8.11984C6.67043 8.40984 6.67043 8.88984 6.38043 9.17984L3.56043 11.9998L6.38043 14.8198C6.67043 15.1098 6.67043 15.5898 6.38043 15.8798C6.24043 16.0298 6.04043 16.0998 5.85043 16.0998Z'
            fill={theme === "dark" ? "white" : "#0A0A0A"}
          />
        </svg>
      </ActionIcon> */}

      <SignOut />
      <div className='flex items-center space-x-3'>
        <Avatar src={user?.image} />
        <div>
          <h6 className='font-semibold text-sm'>{user?.name}</h6>
          <p className='text-xs'>{user?.email}</p>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
