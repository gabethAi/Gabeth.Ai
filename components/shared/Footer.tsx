import { Button, Divider } from "@mantine/core";
import React from "react";
import Logo from "./Logo";
import Link from "next/link";

function Footer() {
  const copyRight = new Date().getFullYear();
  return (
    <section className='bg-slate-600 dark:bg-black text-white py-6 lg:py-10'>
      <div className='container mx-auto  px-4'>
        <div className='flex flex-col items-center text-center leading-relaxed space-y-3 md:max-w-md lg:max-w-lg mx-auto'>
          <h4>READY?</h4>
          <h2 className='text-lg md:text-2xl font-semibold'>
            Discover Extraordinary AI Solutions
          </h2>
          <p className='text-subtle text-xs md:text-sm'>
            Unlocking Gabeth.AI potential for exceptional results. Experience
            the power of intelligent technology. Your journey to extraordinary
            begins here
          </p>
          <Link href={"/auth/register"}>
            <Button
              rightSection={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='24'
                  viewBox='0 0 25 24'
                  fill='none'>
                  <path
                    d='M13.2071 4.63574C12.6548 4.63574 12.2071 5.08346 12.2071 5.63574C12.2071 6.18803 12.6548 6.63574 13.2071 6.63574H16.4497L5.42888 17.6566C5.03836 18.0471 5.03836 18.6802 5.42888 19.0708C5.8194 19.4613 6.45257 19.4613 6.84309 19.0708L17.8639 8.04996V11.2926C17.8639 11.8449 18.3116 12.2926 18.8639 12.2926C19.4162 12.2926 19.8639 11.8449 19.8639 11.2926V5.63574C19.8639 5.08346 19.4162 4.63574 18.8639 4.63574H13.2071Z'
                    fill='white'
                  />
                </svg>
              }>
              Get Started Now
            </Button>
          </Link>
        </div>

        <Divider my='sm' />

        <div className='flex items-center justify-between py-4'>
          <Logo className='size-12 lg:size-20' />
          <div>© {copyRight} Gabeth.AI All rights reserved.</div>
          <div>icons</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
