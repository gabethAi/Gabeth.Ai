import React from "react";

import Button from "@/components/shared/Button";
import Image from "next/image";

import heroImage from "@/app/assets/images/hero-ai.png";
import Link from "next/link";

function Hero() {
  return (
    <section>
      <div className='md:max-w-lg xl:max-w-2xl mx-auto py-8 sm:py-14 lg:py-18'>
        <div className='text-center space-y-4 xl:space-y-5'>
          <div className='text-2xl md:text-3xl xl:text-4xl font-semibold space-y-3'>
            <h1>Unlock Conversations with the Future:</h1>
            <h2>Meet Your AI Chat Companion</h2>
          </div>

          <h6 className='text-sm md:text-base font-medium px-14 lg:px-18 leading-relaxed'>
            Experience Seamless Conversations, Intelligent Assistance, and
            Limitless Possibilities
          </h6>

          <div>
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
        </div>
      </div>

      <div className=''>
        <div
          className='bg-black relative py-8'
          style={{
            width: "100%",
            height: "100%",
            justifyContent: "center",
            alignItems: "center",
            display: "inline-flex",
          }}>
          <Image alt='Gabert Ai' height={300} width={600} src={heroImage} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
