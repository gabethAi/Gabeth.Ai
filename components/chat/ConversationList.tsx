import { Divider } from "@mantine/core";
import { SidebarList } from "../ui/SideBarList";
import ClearChats from "./ClearChats";
import { Chat, User } from "@/lib/db/schema";
import { Suspense } from "react";

interface ConversationList {
  user: User;
  chats: Chat[];
}

function ConversationList({ user, chats }: Readonly<ConversationList>) {
  return (
    <div>
      <div className='flex items-center justify-between'>
        <h6 className='font-semibold'>Conversations</h6>
        <ClearChats user={user} />
      </div>
      <Divider my={"md"} />

      <Suspense
        fallback={
          <div className='flex flex-col flex-1 space-y-4 overflow-auto'>
            {Array.from({ length: 10 }).map((_, i) => (
              <div
                key={i}
                className='w-full h-8 rounded-md shrink-0 animate-pulse bg-slate-200 dark:bg-slate-700'
              />
            ))}
          </div>
        }>
        <SidebarList chats={chats} />
      </Suspense>
    </div>
  );
}

export default ConversationList;
