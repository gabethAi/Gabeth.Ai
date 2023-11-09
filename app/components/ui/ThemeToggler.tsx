"use client";

import useThemeToggler from "@/app/lib/hooks/useThemeToggler";
import { ActionIcon, Tooltip } from "@mantine/core";
import { BiMoon, BiSun } from "react-icons/bi";

function ThemeToggler() {
  const { theme, toggleTheme } = useThemeToggler();

  return (
    <Tooltip label={"Switch Mode"}>
      <ActionIcon variant='default' onClick={toggleTheme}>
        {theme === "dark" ? <BiMoon /> : <BiSun />}
      </ActionIcon>
    </Tooltip>
  );
}

export default ThemeToggler;
