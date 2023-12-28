"use client";

import { useMediaQuery } from "@mantine/hooks";
import Button from "../shared/Button";

import ThemeToggler from "../ui/ThemeToggler";
import { Divider } from "@mantine/core";
import Logo from "../shared/Logo";
import Link from "next/link";

function Header() {
  const isMobile = false;
  // const isMobile = useMediaQuery("(max-width: 768px)");
  return <header>{isMobile ? <MobileHeader /> : <DesktopHeader />}</header>;
}

function MobileHeader() {
  return <div>MobileHeader</div>;
}

function DesktopHeader() {
  return (
    <div className='bg-white dark:bg-black'>
      <div className='flex justify-between items-center container mx-auto px-4'>
        <Logo />
        <div className='flex items-center gap-x-4'>
          <ThemeToggler />
          <Link href={"/auth/register"}>
            <Button variant='subtle'>Get Started</Button>
          </Link>
        </div>
      </div>
      <Divider />
    </div>
  );
}

export default Header;
