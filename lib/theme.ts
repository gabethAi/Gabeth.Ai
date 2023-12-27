"use client";

import {
  createTheme,
  Button,
  TextInput,
  PasswordInput,
  ActionIcon,
  Modal,
} from "@mantine/core";

export const theme = createTheme({
  primaryColor: "gray",
  components: {
    Button: Button.extend({
      defaultProps: {
        size: "md",
        variant: "outline",
      },
    }),
    TextInput: TextInput.extend({
      defaultProps: {
        size: "md",
      },
    }),
    PasswordInput: PasswordInput.extend({
      defaultProps: {
        size: "md",
      },
    }),
    ActionIcon: ActionIcon.extend({
      defaultProps: {
        variant: "transparent",
      },
    }),
    Modal: Modal.extend({
      defaultProps: {
        centered: true,
        overlayProps: {
          backgroundOpacity: 0.75,
          blur: 2,
        },
      },
    }),
  },
});
