import SideBarItem from "./SideBarItem";
import SideBarActions from "./SideBarActions";
import { removeChat } from "@/lib/actions";
import { Chat } from "@/lib/db/schema";
import { ScrollArea } from "@mantine/core";

export function SidebarList({ chats }: { readonly chats: Chat[] }) {
  if (!chats || chats.length === 0) {
    return (
      <div className='p-8 text-center'>
        <p className='text-sm text-muted-foreground'>No chat history</p>
      </div>
    );
  }

  return (
    <ScrollArea className='h-[60vh]'>
      <div className='flex flex-col space-y-2 '>
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
    </ScrollArea>
  );
}
