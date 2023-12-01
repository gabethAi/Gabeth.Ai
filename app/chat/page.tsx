import { nanoid } from "ai";
import ChatSection from "../../components/chat/Chat";

function Chat() {
  const id = nanoid();
  return <ChatSection id={id} />;
}

export default Chat;
