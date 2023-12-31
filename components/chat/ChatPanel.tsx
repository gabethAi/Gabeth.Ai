import PromptForm from "../ui/PromptForm";
import BottomBar from "../ui/BottomBar";
import { Button } from "@mantine/core";
import { BiRefresh, BiStop } from "react-icons/bi";
import { UseChatHelpers } from "ai/react";

export interface ChatPanelProps
  extends Pick<
    UseChatHelpers,
    "input" | "messages" | "handleInputChange" | "handleSubmit" | "reload"
  > {
  readonly isLoading: boolean;
}

function ChatPanel({
  reload,
  messages,
  isLoading,
  input,
  handleInputChange,
  handleSubmit,
}: ChatPanelProps) {
  return (
    <div className='p-2'>
      <div className='mx-auto sm:max-w-2xl sm:px-4'>
        <div className='flex items-center justify-end'>
          {isLoading ? (
            <Button
              variant='light'
              // visibleFrom='sm'
              onClick={() => stop()}
              className='bg-background'>
              <BiStop className='mr-2' />
              Stop generating
            </Button>
          ) : (
            messages?.length > 0 && (
              <Button
                variant='light'
                visibleFrom='sm'
                onClick={() =>
                  reload({
                    options: {
                      body: {
                        regenerate: true,
                        messageId: messages[0]?.id,
                      },
                    },
                  })
                }
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
