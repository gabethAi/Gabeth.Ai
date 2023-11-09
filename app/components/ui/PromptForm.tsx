"use client";
import { Button, TextInput } from "@mantine/core";
import React from "react";
import { BiSend } from "react-icons/bi";
import { UseChatHelpers, useChat } from "ai/react";
import { useRouter } from "next/navigation";
import { useEnterSubmit } from "@/app/lib/hooks/useEnterSubmit";

export interface PromptProps
  extends Pick<UseChatHelpers, "input" | "handleInputChange" | "handleSubmit"> {
  isLoading: boolean;
}

function PromptForm({
  input,
  isLoading,
  handleSubmit,
  handleInputChange,
}: PromptProps) {
  const { formRef, onKeyDown } = useEnterSubmit();
  const inputRef = React.useRef<HTMLInputElement>(null);
  const router = useRouter();

  React.useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <form onSubmit={handleSubmit} ref={formRef}>
      <TextInput
        ref={inputRef}
        size='lg'
        value={input}
        onKeyDown={() => onKeyDown}
        onChange={handleInputChange}
        placeholder='Ask me anything...'
        rightSection={
          <Button loading={isLoading} fullWidth size='md' type='submit'>
            <BiSend />
          </Button>
        }
      />
    </form>
  );
}

export default PromptForm;
