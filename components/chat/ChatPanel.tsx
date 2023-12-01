"use client";

import PromptForm from "../ui/PromptForm";
import BottomBar from "../ui/BottomBar";
import { Button } from "@mantine/core";
import { BiRefresh, BiStop } from "react-icons/bi";
import useChatManager from "@/lib/hooks/useChatManager";
import { Message } from "ai";

export interface ChatPanelProps {
  id?: string;
  initialMessages?: Message[];
  onFinish?: (message: Message) => void;
}

function ChatPanel({ id, initialMessages, onFinish }: ChatPanelProps) {
  const {
    isLoading,
    messages,
    reload,
    stop,
    handleSubmit,
    input,
    handleInputChange,
  } = useChatManager({
    id: id || "",
    initialMessages: initialMessages,
    onFinish: onFinish,
  });
  return (
    <div className='p-2'>
      <div className='mx-auto sm:max-w-2xl sm:px-4'>
        <div className='flex h-10 items-center justify-end'>
          {isLoading ? (
            <Button
              variant='light'
              onClick={() => stop()}
              className='bg-background'>
              <BiStop className='mr-2' />
              Stop generating
            </Button>
          ) : (
            messages?.length > 0 && (
              <Button
                variant='light'
                onClick={() => reload()}
                className='bg-background'>
                <BiRefresh className='mr-2' />
                Regenerate response
              </Button>
            )
          )}
        </div>
        <div className='space-y-4 px-4 py-2 md:py-4'>
          <PromptForm
            handleSubmit={handleSubmit}
            input={input}
            handleInputChange={handleInputChange}
            isLoading={isLoading}
          />

          <div className='hidden sm:block'>
            <BottomBar />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPanel;
