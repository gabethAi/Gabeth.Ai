import { clearChats } from "@/utils/actions";
import { Button } from "@mantine/core";
import React from "react";

function ClearChats() {
  return (
    <form
      action={async () => {
        "use server";
        console.log("clearing chats");

        const result = await clearChats();

        console.log(result, "result from clearChats");
      }}
      className={""}>
      <Button color={"red"} size='xs' type='submit'>
        Delete All
      </Button>
    </form>
  );
}

export default ClearChats;
