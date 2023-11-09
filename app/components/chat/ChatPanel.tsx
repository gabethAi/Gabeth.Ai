"use client";

import PromptForm from "../ui/PromptForm";
import BottomBar from "../ui/BottomBar";
import { Button } from "@mantine/core";
import { UseChatHelpers } from "ai/react";
import { BiRefresh, BiStop } from "react-icons/bi";

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    | "append"
    | "isLoading"
    | "reload"
    | "messages"
    | "stop"
    | "input"
    | "handleInputChange"
    | "handleSubmit"
  > {
  id?: string;
}

function ChatPanel({
  id,
  isLoading,
  stop,
  append,
  reload,
  input,
  handleInputChange,
  handleSubmit,
  messages,
}: ChatPanelProps) {
  return (
    <div className='bg-[#F2F2F2] dark:bg-[#1D1D1D] h-screen'>
      <div className='fixed inset-x-0 bottom-0 bg-gradient-to-b from-muted/10 from-10% to-muted/30 to-50%'>
        {/* <ButtonScrollToBottom /> */}
        <div className='mx-auto sm:max-w-2xl sm:px-4'>
          <div className='flex h-10 items-center justify-center'>
            {isLoading ? (
              <Button
                variant='outline'
                onClick={() => stop()}
                className='bg-background'>
                <BiStop className='mr-2' />
                Stop generating
              </Button>
            ) : (
              messages?.length > 0 && (
                <Button
                  variant='outline'
                  onClick={() => reload()}
                  className='bg-background'>
                  <BiRefresh className='mr-2' />
                  Regenerate response
                </Button>
              )
            )}
          </div>
          <div className='space-y-4 border-t bg-background px-4 py-2 shadow-lg sm:rounded-t-xl sm:border md:py-4'>
            <PromptForm
              handleSubmit={handleSubmit}
              input={input}
              handleInputChange={handleInputChange}
              isLoading={isLoading}
            />

            <BottomBar />
            {/* <FooterText className="hidden sm:block" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ChatPanel;
