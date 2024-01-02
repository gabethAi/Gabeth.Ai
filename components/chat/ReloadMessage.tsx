import { Message } from "@/lib/db/schema";
import { Button } from "@mantine/core";
import { UseChatHelpers } from "ai/react";
import { IoReload } from "react-icons/io5";

interface ReloadMessageProps extends Pick<UseChatHelpers, "reload"> {
  message: Message;
}

function ReloadMessage({ reload, message }: Readonly<ReloadMessageProps>) {
  return (
    <Button
      size={"xs"}
      variant='subtle'
      onClick={(e) => {
        e.preventDefault();
        reload({
          options: {
            body: {
              regenerate: true,
              messageId: message.id,
            },
          },
        });
      }}>
      <IoReload />
    </Button>
  );
}

export default ReloadMessage;
