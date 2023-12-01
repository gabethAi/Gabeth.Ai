import { Button } from "@mantine/core";
import React from "react";
import { BiShare } from "react-icons/bi";

function ShareChat() {
  return (
    <Button variant='light' leftSection={<BiShare className='' />}>
      Share chat
    </Button>
  );
}

export default ShareChat;
