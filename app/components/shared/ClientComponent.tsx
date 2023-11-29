"use client";
import React from "react";

export default function ClientComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
