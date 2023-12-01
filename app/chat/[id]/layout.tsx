import ChatPanel from "@/components/chat/ChatPanel";
import { getUser } from "@/lib/actions";
import { getChat } from "@/utils/actions";
import { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import React from "react";
export interface ChatPageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({
  params,
}: ChatPageProps): Promise<Metadata> {
  const user = await getUser();

  if (!user) {
    return {};
  }

  const chat = await getChat(params.id, user.id);
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

  const chat = await getChat(params.id, user.id);

  if (!chat) {
    notFound();
  }

  if (chat?.userId !== user.email) {
    notFound();
  }

  return (
    <main className='relative h-full'>
      {children}

      <div className='z-10 absolute bottom-0 inset-x-0'>
        <ChatPanel id={chat?.id} initialMessages={chat?.messages} />
      </div>
    </main>
  );
}

export default Layout;
