"use client";
import React from "react";
import { ModalsProvider } from "@mantine/modals";

function ModalProvider({ children }: { readonly children: React.ReactNode }) {
  return <ModalsProvider>{children}</ModalsProvider>;
}

export default ModalProvider;
