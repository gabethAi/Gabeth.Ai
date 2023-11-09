import React from "react";
import { DesktopSideBar } from "../components/ui/SideBar";
import ChatPanel from "../components/chat/ChatPanel";
import MobileAppBar from "../components/ui/MobileAppBar";
import ChatWrapper from "../components/chat/ChatWrapper";

function Chat() {
  return (
    <main className=''>
      {/* AppBar For Mobile */}
      <div className='block md:hidden'>
        <MobileAppBar />
      </div>

      {/* SideBar For Desktop */}
      <div className='grid grid-cols-1 md:grid-cols-8 xl:grid-cols-10 relative'>
        <div className='xl:col-span-2 md:col-span-3 hidden md:block'>
          <DesktopSideBar />
        </div>

        {/* Wrapper for chat panel */}
        <div className='col-span-10 md:col-span-5 xl:col-span-8'>
          <ChatWrapper />
        </div>
      </div>
    </main>
  );
}

export default Chat;
