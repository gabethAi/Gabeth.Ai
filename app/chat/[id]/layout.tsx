import ChatPanel from "@/components/chat/ChatPanel";
import { getChatById, getMessagesByChatId, getUser } from "@/lib/actions";
import { Message } from "ai";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import React from "react";
export interface ChatPageProps {
  readonly params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ChatPageProps): Promise<Metadata> {
  const chat = await getChatById(params.id);
  return {
    title: chat?.title.toString().slice(0, 50) ?? "Chat",
  };
}

async function Layout({
  children,
  params,
}: {
  readonly children: React.ReactNode;
  readonly params: { id: string };
}) {
  const user = await getUser();

  if (!user) {
    if (params.id) {
      return redirect(`/auth/login?next=/chat/${params.id}`);
    }
    redirect(`/auth/login?next=/chat`);
  }

  const chat = await getChatById(params.id);

  if (!chat) {
    redirect("/chat");
  }

  return <main className='h-full'>{children}</main>;
}

export default Layout;
