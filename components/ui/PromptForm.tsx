"use client";
import { Button, TextInput } from "@mantine/core";
import React from "react";
import { BiSend } from "react-icons/bi";
import { UseChatHelpers } from "ai/react";
import { useRouter } from "next/navigation";
import { useEnterSubmit } from "@/lib/hooks/useEnterSubmit";

export interface PromptProps
  extends Pick<UseChatHelpers, "input" | "handleInputChange" | "handleSubmit"> {
  readonly isLoading: boolean;
}

/**
 * Renders a form for user prompts.
 *
 * @component
 * @param {Object} props - The component props.
 * @param {string} props.input - The input value.
 * @param {boolean} props.isLoading - Indicates if the form is in a loading state.
 * @param {Function} props.handleSubmit - The function to handle form submission.
 * @param {Function} props.handleInputChange - The function to handle input change.
 * @returns {JSX.Element} The rendered form component.
 */

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
    <form
      onSubmit={(e) => {
        e.preventDefault();

        handleSubmit(e);
      }}
      ref={formRef}>
      <TextInput
        ref={inputRef}
        size='lg'
        value={input}
        variant='default'
        onKeyDown={() => onKeyDown}
        onChange={handleInputChange}
        placeholder='Ask me anything...'
        rightSection={
          <Button
            variant='transparent'
            loading={isLoading}
            size='sm'
            type='submit'>
            <BiSend />
          </Button>
        }
      />
    </form>
  );
}

export default PromptForm;
