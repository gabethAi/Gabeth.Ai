import { Divider, Loader } from "@mantine/core";
import { SidebarList } from "../ui/SideBarList";
import { getChatsByUserId, getUser } from "@/lib/actions";
import ClearChats from "../ui/ClearChats";
import { User } from "@/lib/db/schema";
import { Suspense } from "react";

async function ConversationList() {
  const user = await getUser();

  const chats = await getChatsByUserId(user?.email as string);

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h6>Conversations</h6>
        <ClearChats user={user as User} />
      </div>
      <Divider my={"md"} />

      <Suspense
         fallback={
          <div className='flex justify-center items-center h-full'>
            <Loader />
          </div>
        }>
        <SidebarList chats={chats} />
      </Suspense>
    </div>
  );
}

export default ConversationList;
