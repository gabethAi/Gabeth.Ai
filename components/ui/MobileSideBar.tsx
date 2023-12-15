import { Button, Divider, Drawer, Stack } from "@mantine/core";
import UpgradeButton from "./UpgradeButton";
import ConversationList from "../chat/ConversationList";
import ProfileCard from "./ProfileCard";
import { User } from "@/lib/db/schema";
import useUser from "@/lib/hooks/useUser";
import Link from "next/link";

interface MobileSideBar {
  open: boolean;
  onClose: () => void;
}
function MobileSideBar({ open, onClose }: MobileSideBar) {
  // const { user } = useUser();
  return (
    <Drawer opened={open} onClose={onClose}>
      <div className='flex flex-col gap-y-6'>
        <div className=''>
          <div className=''>
            <h1 className='font-semibold text-2xl'>Gabeth.AI</h1>
          </div>
          <Divider my={"md"} />
          <Link href={"/chat"}>
            <Button fullWidth onClick={onClose}>
              New Chat
            </Button>
          </Link>
        </div>

        <div className=''>{/* <ConversationList /> */}</div>

        <div className='absolute bottom-4 inset-x-5'>
          <Divider my={"md"} />
          <Stack gap={"lg"} align='flex-start'>
            <UpgradeButton />

            {/* <ProfileCard user={user} /> */}
          </Stack>
        </div>
      </div>
    </Drawer>
  );
}

export default MobileSideBar;
