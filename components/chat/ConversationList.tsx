import { Divider } from "@mantine/core";
import { SidebarList } from "../ui/SideBarList";
import { fetchChats, getUser } from "@/lib/actions";
import ClearChats from "./ClearChats";
import { User } from "@/lib/db/schema";
import { Suspense } from "react";

async function ConversationList() {
  const user = await getUser();
  const chats = await fetchChats(user as User);

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h6 className='font-semibold'>Conversations</h6>
        <ClearChats user={user as User} />
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
