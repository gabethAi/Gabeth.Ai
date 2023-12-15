"use client";

import useThemeToggler from "@/lib/hooks/useThemeToggler";
import { ActionIcon, Button, ButtonProps, Tooltip } from "@mantine/core";
import { BiMoon, BiSun } from "react-icons/bi";

interface Props {
  variant?: ButtonProps["variant"];
  children?: React.ReactNode;
}

function ThemeToggler({ children, variant = "subtle" }: Props) {
  const { theme, toggleTheme } = useThemeToggler();

  return (
    <Tooltip label={"Switch Mode"}>
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
    </Tooltip>
  );
}

export default ThemeToggler;
