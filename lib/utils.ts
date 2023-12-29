import { clsx, type ClassValue } from "clsx";
import { customAlphabet } from "nanoid";
import { twMerge } from "tailwind-merge";
import { modals } from "@mantine/modals";
import { ButtonProps, GroupProps } from "@mantine/core";
import React from "react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export async function fetcher<JSON = any>(
  input: RequestInfo,
  init?: RequestInit
): Promise<JSON> {
  const res = await fetch(input, init);

  if (!res.ok) {
    const json = await res.json();
    if (json.error) {
      const error = new Error(json.error) as Error & {
        status: number;
      };
      error.status = res.status;
      throw error;
    } else {
      throw new Error("An unexpected error occurred");
    }
  }

  return res.json();
}

export function formatDate(input: string | number | Date): string {
  const date = new Date(input);
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export interface ConfirmModalProps {
  id?: string;
  title?: React.ReactNode;
  centered?: boolean;
  children?: React.ReactNode;
  onCancel?: () => void;
  onConfirm?: () => void;
  closeOnConfirm?: boolean;
  closeOnCancel?: boolean;
  cancelProps?: ButtonProps & React.ComponentPropsWithoutRef<"button">;
  confirmProps?: ButtonProps & React.ComponentPropsWithoutRef<"button">;
  groupProps?: GroupProps;
  labels?: {
    confirm: React.ReactNode;
    cancel: React.ReactNode;
  };
}

export function openModal({
  title,
  children,
  onCancel,
  onConfirm,
  centered = false,
  labels = { confirm: "Confirm", cancel: "Cancel" },
  confirmProps,
}: ConfirmModalProps) {
  return modals.openConfirmModal({
    title,
    children,
    onConfirm,
    onCancel,
    centered,
    labels: {
      confirm: labels.confirm,
      cancel: labels.cancel,
    },
    confirmProps,
  });
}
