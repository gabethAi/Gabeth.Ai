"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

function ActiveNavLink({
  children,
  href,
}: {
  children: React.ReactNode;
  href: string;
}) {
  const pathname = usePathname();

  const isActive = pathname === href;

  return (
    <Link href={href} legacyBehavior>
      <a
        className={`inline-block ${
          isActive ? "bg-gray-200" : "hover:bg-gray-200"
        } px-2 py-1 rounded-md`}>
        {children}
      </a>
    </Link>
  );
}

export default ActiveNavLink;
