import SideBarItem from "./SideBarItem";
import SideBarActions from "./SideBarActions";
import { getChatsByUserId, getUser, removeChat } from "@/lib/actions";
import ScrollAreaAutoSize from "./ScrollAreaAutoSize";

export async function SidebarList() {
  const user = await getUser();

  const chats = await getChatsByUserId(user?.email as string);
  return (
    <>
      {chats?.length ? (
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
      ) : (
        <div className='p-8 text-center'>
          <p className='text-sm text-muted-foreground'>No chat history</p>
        </div>
      )}
    </>
  );
}
