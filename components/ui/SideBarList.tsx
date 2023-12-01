import { removeChat, shareChat } from "@/utils/actions";
import SideBarItem from "./SideBarItem";
import SideBarActions from "./SideBarActions";
import { Chat } from "@/lib/types";
import { ScrollArea } from "@mantine/core";

export async function SidebarList({ chats }: { chats: Chat[] }) {
  return (
    <div>
      {chats?.length ? (
        <ScrollArea h={575} className=''>
          <div className='space-y-2 px-2'>
            {chats.map(
              (chat) =>
                chat && (
                  <SideBarItem key={chat?.id} chat={chat}>
                    <SideBarActions
                      chat={chat}
                      removeChat={removeChat}
                      shareChat={shareChat}
                    />
                  </SideBarItem>
                )
            )}
          </div>
        </ScrollArea>
      ) : (
        <div className='p-8 text-center'>
          <p className='text-sm text-muted-foreground'>No chat history</p>
        </div>
      )}
    </div>
  );
}
