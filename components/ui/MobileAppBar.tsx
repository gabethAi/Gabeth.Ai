"use client";

import { ActionIcon, Divider, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { BiMenu, BiPlus } from "react-icons/bi";
// import { MobileSideBar } from "./SideBar";

function MobileAppBar() {
  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <header>
        <div className='flex items-center justify-between p-4'>
          <ActionIcon onClick={open}>
            <BiMenu />
          </ActionIcon>
          <h6>Fix CSS Parsing Error</h6>
          <BiPlus />
        </div>

        <Divider />
      </header>

      {/* <MobileSideBar open={opened} onClose={close} /> */}
    </>
  );
}

export default MobileAppBar;
