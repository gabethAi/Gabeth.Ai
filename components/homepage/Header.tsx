import Button from "../shared/Button";
import ThemeToggler from "../ui/ThemeToggler";
import { Divider } from "@mantine/core";
import Logo from "../shared/Logo";
import Link from "next/link";

function Header() {
  return (
    <div className='bg-white relative dark:bg-black p-4'>
      <div className='flex justify-between items-center container mx-auto px-4'>
        <Logo className='size-12 lg:size-20' />
        <div className='flex items-center gap-x-4'>
          <ThemeToggler />
          <Link href={"/auth/register"}>
            <Button variant='default'>Get Started</Button>
          </Link>
        </div>
      </div>
      <Divider className='absolute bottom-0 inset-x-0' />
    </div>
  );
}

export default Header;
