import {
  MantineColorScheme,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useCallback, useEffect } from "react";

function useThemeToggler() {
  const { setColorScheme, colorScheme } = useMantineColorScheme();
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const preferredTheme =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";

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

  // function to update the theme
  const updateTheme = useCallback(
    (theme: MantineColorScheme) => {
      // If the theme is auto, then set the theme to the preferred theme
      if (theme == "auto") {
        theme = preferredTheme;
      }

      localStorage.theme = theme;
      setColorScheme(theme);
      if (theme === "dark") {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
    },
    [setColorScheme, preferredTheme]
  );

  return {
    theme: computedColorScheme,
    preferredTheme,
    updateTheme,
    toggleTheme,
  };
}

export default useThemeToggler;
