"use client";
import { Chat, ServerActionResult } from "@/app/lib/types";
import React from "react";
import { Popover, Text, Button, ActionIcon } from "@mantine/core";

interface SidebarActionsProps {
  chat: Chat;
  removeChat: (args: { id: string; path: string }) => ServerActionResult<void>;
  shareChat: (chat: Chat) => ServerActionResult<Chat>;
}

function SideBarActions({ chat, removeChat, shareChat }: SidebarActionsProps) {
  return (
    <div>
      <Popover width={200} position='right' withArrow shadow='md'>
        <Popover.Target>
          <ActionIcon>
            <svg
              className='fill-[#0A0A0A] dark:fill-white'
              width='16'
              height='16'
              viewBox='0 0 16 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M3.33333 9.83366C2.32 9.83366 1.5 9.01366 1.5 8.00033C1.5 6.98699 2.32 6.16699 3.33333 6.16699C4.34667 6.16699 5.16667 6.98699 5.16667 8.00033C5.16667 9.01366 4.34667 9.83366 3.33333 9.83366ZM3.33333 7.16699C2.87333 7.16699 2.5 7.54033 2.5 8.00033C2.5 8.46033 2.87333 8.83366 3.33333 8.83366C3.79333 8.83366 4.16667 8.46033 4.16667 8.00033C4.16667 7.54033 3.79333 7.16699 3.33333 7.16699Z' />
              <path d='M12.6673 9.83366C11.654 9.83366 10.834 9.01366 10.834 8.00033C10.834 6.98699 11.654 6.16699 12.6673 6.16699C13.6807 6.16699 14.5007 6.98699 14.5007 8.00033C14.5007 9.01366 13.6807 9.83366 12.6673 9.83366ZM12.6673 7.16699C12.2073 7.16699 11.834 7.54033 11.834 8.00033C11.834 8.46033 12.2073 8.83366 12.6673 8.83366C13.1273 8.83366 13.5007 8.46033 13.5007 8.00033C13.5007 7.54033 13.1273 7.16699 12.6673 7.16699Z' />
              <path d='M7.99935 9.83366C6.98602 9.83366 6.16602 9.01366 6.16602 8.00033C6.16602 6.98699 6.98602 6.16699 7.99935 6.16699C9.01268 6.16699 9.83268 6.98699 9.83268 8.00033C9.83268 9.01366 9.01268 9.83366 7.99935 9.83366ZM7.99935 7.16699C7.53935 7.16699 7.16602 7.54033 7.16602 8.00033C7.16602 8.46033 7.53935 8.83366 7.99935 8.83366C8.45935 8.83366 8.83268 8.46033 8.83268 8.00033C8.83268 7.54033 8.45935 7.16699 7.99935 7.16699Z' />
            </svg>
          </ActionIcon>
        </Popover.Target>
        <Popover.Dropdown>
          <Button variant='transparent'>Share</Button>
          <Button
            variant='transparent'
            onClick={async (e) => {
              e.preventDefault();
              const result = await removeChat({ id: chat.id, path: chat.path });

              console.log(result, "result from remove chat");
            }}>
            Delete
          </Button>
        </Popover.Dropdown>
      </Popover>
    </div>
  );
}

export default SideBarActions;
