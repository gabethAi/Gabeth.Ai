"use client";

import { getChatById } from "@/lib/actions";
import useChat from "@/lib/hooks/useChat";
import { ActionIcon, Divider, Drawer } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useParams } from "next/navigation";
import { BiMenu, BiPlus } from "react-icons/bi";
import MobileSideBar from "./MobileSideBar";
import Link from "next/link";

function MobileAppBar() {
  const params = useParams();
  const { data, isLoading } = useChat({
    chatId: params.id as string,
  });

  const [opened, { open, close }] = useDisclosure(false);
  return (
    <>
      <header className=''>
        <div className='flex items-center justify-between p-4'>
          <ActionIcon onClick={open} variant='subtle'>
            <BiMenu />
          </ActionIcon>

          {params.id && isLoading ? (
            <span className='h-6 w-48 bg-slate-700 rounded-sm animate-pulse' />
          ) : (
            <h6>{data?.chat?.title.slice(0, 40)}</h6>
          )}
          <Link href={"/chat"}>
            <ActionIcon variant='subtle'>
              <BiPlus />
            </ActionIcon>
          </Link>
        </div>

        <Divider />
      </header>

      <MobileSideBar open={opened} onClose={close} />
    </>
  );
}

export default MobileAppBar;
