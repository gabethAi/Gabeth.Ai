"use client";
import { Button, Divider, Drawer, Stack } from "@mantine/core";
import UpgradeButton from "./UpgradeButton";
import ProfileCard from "./ProfileCard";
import useUser from "@/lib/hooks/useUser";
import Link from "next/link";
import { SidebarList } from "./SideBarList";
import useChats from "@/lib/hooks/useChats";
import Logo from "../shared/Logo";
import { User } from "@/lib/db/schema";

interface MobileSideBar {
  open: boolean;
  onClose: () => void;
}
function MobileSideBar({ open, onClose }: Readonly<MobileSideBar>) {
  const { user } = useUser();
  const { chats } = useChats();

  return (
    <Drawer
      title={
        <Link href={"/chat"} className='flex items-center space-x-4'>
          <Logo />
          <h1 className='font-semibold text-2xl'>Gabeth.AI</h1>
        </Link>
      }
      opened={open}
      size={"xs"}
      onClose={onClose}>
      <div className='flex flex-col gap-y-6'>
        <Link href={"/chat"}>
          <Button fullWidth onClick={onClose}>
            New Chat
          </Button>
        </Link>

        <SidebarList chats={chats || []} />

        <div className='absolute bottom-4 inset-x-0'>
          <Divider my={"md"} />
          <Stack gap={"lg"} px={"md"} align='flex-start'>
            <UpgradeButton />

            <ProfileCard user={user as User} />
          </Stack>
        </div>
      </div>
    </Drawer>
  );
}

export default MobileSideBar;
