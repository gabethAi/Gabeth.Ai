import { Divider } from "@mantine/core";
import { ChatMessage } from "./ChatMessage";
import { ChatMessageActions } from "./ChatMessageActions";
import { Message } from "@/lib/db/schema";
import { UseChatHelpers } from "ai/react";

export interface ChatList extends Pick<UseChatHelpers, "reload"> {
  messages: Message[];
  childMessages?: Message[];
  isLoading?: boolean;
}

function ChatList({
  messages,
  childMessages,
  isLoading,
  reload,
}: Readonly<ChatList>) {
  return (
    <div className='max-w-2xl mx-auto px-4 py-4'>
      {messages.map((message, index) => (
        <div key={message.id}>
          <ChatMessage
            key={message.id}
            message={message}
            childMessages={childMessages}
          />
          {!isLoading && (
            <ChatMessageActions
              key={message.id}
              message={message}
              reload={reload}
            />
          )}
          {index < messages.length - 1 && <Divider my={"md"} />}
        </div>
      ))}
    </div>
  );
}

export default ChatList;
