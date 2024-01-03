"use client";

import {
  createTheme,
  Button,
  TextInput,
  PasswordInput,
  ActionIcon,
  Modal,
  Drawer,
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
        padding: "lg",
        centered: true,
        overlayProps: {
          backgroundOpacity: 0.75,
          blur: 2,
        },
      },
      styles(theme, props, ctx) {
        return {
          title: {
            fontWeight: 600,
            fontSize: 18,
            lineHeight: "22px",
          },
          header: {
            borderBottom: `1px solid ${theme.colors.dark[3]}`,
            paddingBottom: theme.spacing.xs,
            marginBottom: theme.spacing.md,
          },
        };
      },
    }),

    Drawer: Drawer.extend({
      styles(theme, props, ctx) {
        return {
          header: {
            borderBottom: `1px solid ${theme.colors.dark[3]}`,
            paddingBottom: theme.spacing.xs,
            marginBottom: theme.spacing.md,
          },
        };
      },
    }),
  },
});
