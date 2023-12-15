import { Badge, Button } from "@mantine/core";
import React from "react";
import { BiShare } from "react-icons/bi";

function ShareChat() {
  return (
    <Button
      variant='light'
      disabled
      leftSection={<BiShare className='' />}
      rightSection={
        <Badge color='teal'>
          <h6>Coming soon</h6>
        </Badge>
      }>
      Share chat
    </Button>
  );
}

export default ShareChat;
