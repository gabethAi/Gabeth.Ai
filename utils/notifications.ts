"use client";

import { notifications } from "@mantine/notifications";

export interface Notification {
  readonly message: string;
  readonly type: "error" | "success";
}

export function showNotification({ message, type }: Notification) {
  notifications.show({
    title: type,
    message: message,
    color: type === "error" ? "red" : "blue",
  });
}
