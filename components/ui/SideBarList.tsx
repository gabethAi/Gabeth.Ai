import SideBarItem from "./SideBarItem";
import SideBarActions from "./SideBarActions";
import { ScrollArea } from "@mantine/core";
import { Chat } from "@/lib/db/schema";
import { removeChat } from "@/lib/actions";
import ScrollAreaAutoSize from "./ScrollAreaAutoSize";

export async function SidebarList({ chats }: { chats: Chat[] }) {
  // const chatToRender =

  return (
    <>
      {chats?.length ? (
        <ScrollAreaAutoSize>
          {chats.map(
            (chat) =>
              chat && (
                <SideBarItem key={chat?.id} chat={chat}>
                  <SideBarActions
                    chat={chat}
                    removeChat={removeChat}
                    // shareChat={shareChat}
                  />
                </SideBarItem>
              )
          )}
        </ScrollAreaAutoSize>
      ) : (
        <div className='p-8 text-center'>
          <p className='text-sm text-muted-foreground'>No chat history</p>
        </div>
      )}
    </>
  );
}
