import { Divider } from "@mantine/core";
import { SidebarList } from "../ui/SideBarList";
import { getChatsByUserId, getUser } from "@/lib/actions";
import ClearChats from "../ui/ClearChats";

async function ConversationList() {
  const user = await getUser();

  const chats = await getChatsByUserId(user?.email as string);

  return (
    <div>
      <div className='flex items-center justify-between'>
        <h6>Conversations</h6>
        <ClearChats />
      </div>
      <Divider my={"md"} />

      <SidebarList chats={chats} />
    </div>
  );
}

export default ConversationList;
