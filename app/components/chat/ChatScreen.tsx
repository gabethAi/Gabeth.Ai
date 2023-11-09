import React from "react";
import EmptyScreen from "./EmptyScreen";

const messages = [];

function ChatScreen() {
  return (
    <div>
      {messages.length ? (
        <>
          {/* <ChatList messages={messages} />
            <ChatScrollAnchor trackVisibility={isLoading} /> */}
        </>
      ) : (
        <EmptyScreen />
      )}
    </div>
  );
}

export default ChatScreen;
