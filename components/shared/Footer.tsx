import { Divider } from "@mantine/core";
import React from "react";
import Logo from "./Logo";

function Footer() {
  const copyRight = new Date().getFullYear();
  return (
    <section className='bg-primary text-white py-6 lg:py-10'>
      <div className='container mx-auto'>
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
          <button>Get Started</button>
        </div>

        <Divider my='sm' />

        <div className='flex items-center justify-between py-4 px-4'>
          <Logo />
          <div>© {copyRight} Gabeth.AI All rights reserved.</div>
          <div>icons</div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
