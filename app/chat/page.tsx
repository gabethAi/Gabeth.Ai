import { nanoid } from "ai";
import ChatSection from "../../components/chat/Chat";

// export const runtime = "edge";
const id = nanoid();

function Chat() {
  // const router = useRouter();
  return <ChatSection id={id} />;
}

export default Chat;
