"use client";
import React from "react";
import coreValuesDark from "@/app/assets/brand/core-values-dark.svg";
import coreValuesLight from "@/app/assets/brand/coreValues-light.svg";
import { useComputedColorScheme } from "@mantine/core";
import Image from "next/image";

function CoreValuesIllustration() {
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });

  const imageSrc =
    computedColorScheme === "dark" ? coreValuesDark : coreValuesLight;
  return <Image src={imageSrc} alt='An Illustration of Gabeth.Ai' />;
}

export default CoreValuesIllustration;
