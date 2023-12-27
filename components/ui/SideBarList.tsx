import SideBarItem from "./SideBarItem";
import SideBarActions from "./SideBarActions";
import { fetchChats, removeChat } from "@/lib/actions";
import ScrollAreaAutoSize from "./ScrollAreaAutoSize";

export async function SidebarList() {
  const chats = await fetchChats();

  if (!chats || chats.length === 0) {
    return (
      <div className='p-8 text-center'>
        <p className='text-sm text-muted-foreground'>No chat history</p>
      </div>
    );
  }

  return (
    <ScrollAreaAutoSize>
      <div className='flex flex-col space-y-2'>
        {chats.map(
          (chat, index) =>
            chat && (
              <SideBarItem index={index} key={chat.id} chat={chat}>
                <SideBarActions
                  chat={chat}
                  removeChat={removeChat}
                  // shareChat={shareChat}
                />
              </SideBarItem>
            )
        )}
      </div>
    </ScrollAreaAutoSize>
  );
}
