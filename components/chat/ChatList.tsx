import { Divider } from "@mantine/core";
import { Message } from "ai";
import { ChatMessage } from "./ChatMessage";
import { ChatMessageActions } from "./ChatMessageActions";

export interface ChatList {
  messages: Message[];
  isLoading?: boolean;
}

function ChatList({ messages, isLoading }: Readonly<ChatList>) {
  // console.log(isLoading, "isLoading");
  return (
    <div className='max-w-2xl mx-auto px-4 py-4'>
      {messages.map((message, index) => (
        <div key={message.id}>
          <ChatMessage message={message} />
          {!isLoading && <ChatMessageActions message={message} />}
          {index < messages.length - 1 && <Divider my={"md"} />}
        </div>
      ))}
    </div>
  );
}

export default ChatList;
