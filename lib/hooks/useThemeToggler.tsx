import { useComputedColorScheme, useMantineColorScheme } from "@mantine/core";
import { useCallback, useEffect } from "react";

function useThemeToggler() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  // Function to toggle the theme
  const toggleTheme = useCallback(() => {
    if (localStorage.theme === "dark") {
      localStorage.theme = "light";
      setColorScheme("light");
      document.documentElement.classList.remove("dark");
    } else {
      localStorage.theme = "dark";
      setColorScheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, [setColorScheme]);

  return { theme: computedColorScheme, toggleTheme };
}

export default useThemeToggler;
