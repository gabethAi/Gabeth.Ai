import { Divider } from "@mantine/core";
import { Message } from "ai";
import { ChatMessage } from "./ChatMessage";

export interface ChatList {
  readonly messages: Message[];
}

function ChatList({ messages }: ChatList) {
  return (
    <div className='relative mx-auto max-w-2xl px-4'>
      {messages.map((message, index) => (
        <div key={message.id}>
          <ChatMessage message={message} />
          {index < messages.length - 1 && <Divider my={"md"} />}
        </div>
      ))}
    </div>
  );
}

export default ChatList;
