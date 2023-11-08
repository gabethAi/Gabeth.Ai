"use client";

import { createTheme, Button, TextInput, ActionIcon } from "@mantine/core";

export const theme = createTheme({
  fontFamily: "Open Sans, sans-serif",
  primaryColor: "gray",
  components: {
    Button: Button.extend({
      defaultProps: {
        size: "md",
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        size: "md",
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: "transparent",
      },
    }),
  },
});
