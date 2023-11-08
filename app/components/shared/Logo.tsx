"use client";
import React from "react";
import logoLight from "@/app/assets/icons/logo-light.svg";
import logoDark from "@/app/assets/icons/logo-dark.svg";
import { useComputedColorScheme } from "@mantine/core";
import Image from "next/image";

interface Props {
  size?: number | `${number}`;
}

function Logo({ size }: Props) {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const logoSrc = computedColorScheme === "dark" ? logoDark : logoLight;

  return (
    <Image
      src={logoSrc}
      alt='Gabeth.Ai Logo'
      width={size ? size : 100}
      height={size ? size : 100}
    />
  );
}

export default Logo;
