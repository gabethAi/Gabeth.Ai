import { Divider } from "@mantine/core";
import { Message } from "ai";
import { ChatMessage } from "./ChatMessage";

export interface ChatList {
  readonly messages: Message[];
}

function ChatList({ messages }: ChatList) {
  return (
    <div className=''>
      <div className='max-w-2xl mx-auto px-4 py-4'>
        {messages.map((message, index) => (
          <div key={message.id}>
            <ChatMessage message={message} />
            {index < messages.length - 1 && <Divider my={"md"} />}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ChatList;
