"use client";
import { Button, Divider, Drawer, Flex, Group, Stack } from "@mantine/core";
import UpgradeButton from "./UpgradeButton";
import ProfileCard from "./ProfileCard";
import useUser from "@/lib/hooks/useUser";
import Link from "next/link";
import useChats from "@/lib/hooks/useChats";
import Logo from "../shared/Logo";
import { User } from "@/lib/db/schema";
import ConversationList from "../chat/ConversationList";
import LeaveFeedback from "./LeaveFeedback";
import Settings from "./Settings";

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
      size={"sm"}
      onClose={onClose}>
      <div className='flex flex-col gap-y-6'>
        <Link href={"/chat"}>
          <Button fullWidth onClick={onClose}>
            New Chat
          </Button>
        </Link>

        <ConversationList user={user as User} chats={chats} />

        <div className='absolute bottom-4 inset-x-0'>
          <Divider my={"md"} />
          <Flex gap={"xl"} px={"sm"}>
            <Stack justify='space-evenly'>
              <LeaveFeedback />
              <Settings />
            </Stack>

            <Divider orientation={"vertical"} />

            <Stack>
              <UpgradeButton />
              <ProfileCard user={user as User} />
            </Stack>
          </Flex>
        </div>
      </div>
    </Drawer>
  );
}

export default MobileSideBar;
