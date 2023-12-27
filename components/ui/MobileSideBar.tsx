"use client";
import { Button, Divider, Drawer, Stack } from "@mantine/core";
import UpgradeButton from "./UpgradeButton";
import ProfileCard from "./ProfileCard";
import { User } from "@/lib/types";
import useUser from "@/lib/hooks/useUser";
import Link from "next/link";
import { SidebarList } from "./SideBarList";
import useChats from "@/lib/hooks/useChats";
import Logo from "../shared/Logo";

interface MobileSideBar {
  open: boolean;
  onClose: () => void;
}
function MobileSideBar({ open, onClose }: Readonly<MobileSideBar>) {
  const { user } = useUser();
  const { chats } = useChats();

  return (
    <Drawer opened={open} size={"xs"} onClose={onClose}>
      <div className='flex flex-col gap-y-6'>
        <div className=''>
          <div className=''>
            <Link href={"/chat"} className='flex items-center'>
              <Logo />
              <h1 className='font-semibold text-2xl'>Gabeth.AI</h1>
            </Link>
          </div>
          <Divider my={"md"} />
          <Link href={"/chat"}>
            <Button fullWidth onClick={onClose}>
              New Chat
            </Button>
          </Link>
        </div>

        <div className=''>
          <SidebarList chats={chats || []} />
        </div>

        <div className='absolute bottom-4 inset-x-5'>
          <Divider my={"md"} />
          <Stack gap={"lg"} align='flex-start'>
            <UpgradeButton />

            <ProfileCard user={user as User} />
          </Stack>
        </div>
      </div>
    </Drawer>
  );
}

export default MobileSideBar;
