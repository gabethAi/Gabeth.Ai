"use client";

import useThemeToggler from "@/lib/hooks/useThemeToggler";
import { ActionIcon, Button, ButtonProps } from "@mantine/core";
import { BiMoon, BiSun } from "react-icons/bi";

interface Props {
  variant?: ButtonProps["variant"];
  children?: React.ReactNode;
}

function ThemeToggler({ children, variant = "subtle" }: Readonly<Props>) {
  const { theme, toggleTheme } = useThemeToggler();

  return (
    <Button
        variant={variant}
        onClick={toggleTheme}
        rightSection={
          <ActionIcon variant='transparent' color='gray' radius='xl'>
            {theme === "dark" ? <BiMoon /> : <BiSun />}
          </ActionIcon>
        }>
        {children}
      </Button>
  );
}

export default ThemeToggler;
