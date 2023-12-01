"use client";

import useThemeToggler from "@/lib/hooks/useThemeToggler";
import { ActionIcon, Button, Tooltip } from "@mantine/core";
import { BiMoon, BiSun } from "react-icons/bi";

function ThemeToggler({ children }: { children?: React.ReactNode }) {
  const { theme, toggleTheme } = useThemeToggler();

  return (
    <Tooltip label={"Switch Mode"}>
      <Button
        variant='default'
        onClick={toggleTheme}
        rightSection={
          <ActionIcon variant='transparent' color='gray' radius='xl'>
            {theme === "dark" ? <BiMoon /> : <BiSun />}
          </ActionIcon>
        }>
        {/* {theme === "dark" ? <BiMoon /> : <BiSun />} */}
        {children}
      </Button>
    </Tooltip>
  );
}

export default ThemeToggler;
