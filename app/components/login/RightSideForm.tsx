import { Button, Card, Divider, PasswordInput, TextInput } from "@mantine/core";
import React from "react";
import Logo from "../shared/Logo";
import Link from "next/link";
import { signIn, auth } from "@/app/lib/auth";
import GoogleSignInButton from "../ui/GoogleSignInButton";

async function RightSideForm() {
  async function signInUser(formData: FormData) {
    "use server";

    // mutate data
    // revalidate cache
    const email = formData.get("email");
    const password = formData.get("password");

    // console.log(formData, "form data");

    const result = await signIn("Credentials", {
      redirect: false,
      email: email,
      password: password,
    });

    console.log(result, "result");
  }
  return (
    <div className='flex flex-col items-center justify-center h-full mx-auto'>
      <Card shadow='lg' radius={"md"} p={"xl"}>
        <div className='min-w-[420px]'>
          <div className='flex flex-col justify-center items-center gap-y-2 py-4'>
            <Link href={"/"} className='pl-28'>
              <Logo size={200} />
            </Link>
            <h2 className='text-xl md:text-2xl lg:text-3xl  font-semibold'>
              Welcome back
            </h2>
            <p className='text-sm'>
              Please fill in your information to sign in
            </p>
          </div>

          <form action={signInUser} className='flex flex-col space-y-5'>
            <TextInput
              label='Email'
              name='email'
              placeholder='user@example.com'
            />

            <PasswordInput
              label='Password'
              name='password'
              placeholder='Enter your password'
            />

            <Button
              type='submit'
              rightSection={
                <svg
                  width='25'
                  height='25'
                  viewBox='0 0 25 25'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M12.5 22.7222C18.0228 22.7222 22.5 18.245 22.5 12.7222C22.5 7.19932 18.0228 2.72217 12.5 2.72217C6.97715 2.72217 2.5 7.19932 2.5 12.7222C2.5 18.245 6.97715 22.7222 12.5 22.7222Z'
                    stroke='#DDDDDD'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M9 12.7222H15'
                    stroke='#DDDDDD'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                  <path
                    d='M13 15.7222L16 12.7222L13 9.72217'
                    stroke='#DDDDDD'
                    stroke-width='1.5'
                    stroke-linecap='round'
                    stroke-linejoin='round'
                  />
                </svg>
              }>
              Sign in
            </Button>
          </form>

          <Divider label='or' labelPosition='center' my={"lg"} />

          <div className='flex flex-col space-y-4'>
            <GoogleSignInButton />
            <Button
              rightSection={
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='20'
                  height='25'
                  viewBox='0 0 20 25'
                  fill='none'>
                  <g clip-path='url(#clip0_397_39697)'>
                    <path
                      d='M19.1392 8.91471C17.5416 9.90193 16.5548 11.5943 16.5548 13.4747C16.5548 15.5902 17.8235 17.5177 19.75 18.3168C19.3741 19.5391 18.8102 20.6674 18.1054 21.7016C17.0717 23.1589 15.991 24.6633 14.3934 24.6633C12.7958 24.6633 12.3259 23.7231 10.4464 23.7231C8.61386 23.7231 7.95602 24.7103 6.45241 24.7103C4.94879 24.7103 3.91506 23.347 2.74036 21.6546C1.18976 19.3041 0.296988 16.5774 0.25 13.7098C0.25 9.05574 3.25723 6.56418 6.26446 6.56418C7.86205 6.56418 9.17771 7.59841 10.1645 7.59841C11.1042 7.59841 12.6078 6.51717 14.3934 6.51717C16.2729 6.47016 18.0584 7.36336 19.1392 8.91471ZM13.5476 4.54272C14.3464 3.60251 14.7693 2.42725 14.8163 1.20497C14.8163 1.06394 14.8163 0.875895 14.7693 0.734863C13.4066 0.875895 12.138 1.53404 11.2452 2.56828C10.4464 3.46148 9.97651 4.58973 9.92952 5.81201C9.92952 5.95304 9.92952 6.09407 9.97651 6.2351C10.0705 6.2351 10.2114 6.28212 10.3054 6.28212C11.5741 6.18809 12.7488 5.52995 13.5476 4.54272Z'
                      fill='white'
                    />
                  </g>
                  <defs>
                    <clipPath id='clip0_397_39697'>
                      <rect
                        width='19.5'
                        height='23.9754'
                        fill='white'
                        transform='translate(0.25 0.734375)'
                      />
                    </clipPath>
                  </defs>
                </svg>
              }>
              Sign in with Apple
            </Button>

            <div className='flex justify-center items-center space-x-2 text-sm pt-2'>
              <p>Don’t have an account?</p>
              <Link href={"/auth/register"}> Sign Up</Link>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default RightSideForm;
