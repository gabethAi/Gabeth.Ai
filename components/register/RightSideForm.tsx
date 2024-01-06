"use client";
import {
  Alert,
  Badge,
  Button,
  Card,
  Divider,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import Logo from "../shared/Logo";
import Link from "next/link";
import { redirect, useRouter } from "next/navigation";
import { auth } from "@/auth";
import { registerUser } from "@/lib/actions";
import { SignIn } from "../ui/AuthComponent";
import { FaGithub } from "react-icons/fa";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { useTransition } from "react";
import { BiError } from "react-icons/bi";
import { DevTool } from "@hookform/devtools";

export const NewUserShema = z.object({
  email: z.string().email(),
  password: z.string().min(6, "Password must be at least 6 characters"),
  fullName: z.string(),
});

/**
 * Renders the right side form for user registration.
 */

function RightSideForm() {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();

  const {
    handleSubmit,
    control,
    formState: { errors },
    getValues,
  } = useForm<z.infer<typeof NewUserShema>>({
    resolver: zodResolver(NewUserShema),
  });

  const email = getValues("email");

  const {
    mutate,
    isPending: isMutating,
    isError,
    error,
  } = useMutation({
    mutationKey: ["registerUser", email],
    mutationFn: async (data: z.infer<typeof NewUserShema>) => {
      const newUser = await registerUser({
        email: data.email,
        password: data.password,
        name: data.fullName,
      });

      return newUser;
    },
    onError: (error) => {
      console.log(error, "error");
      throw new Error("Something went wrong");
    },
    onSuccess: (data) => {
      console.log(data, "data");
      startTransition(() => {
        router.replace("/auth/login");
      });
    },
  });

  const onSubmit = (data: z.infer<typeof NewUserShema>) => mutate(data);

  return (
    <div className='p-4 flex flex-col items-center justify-center h-full mx-auto max-w-md xl:max-w-lg'>
      <Card miw={380} maw={500} shadow='lg' radius={"md"} p={"xl"}>
        <div className='flex flex-col justify-center items-center gap-y-2 py-4'>
          <Link href={"/"}>
            <Logo className='size-20 lg:size-32' />
          </Link>
          <h2 className='text-xl md:text-2xl lg:text-3xl  font-semibold'>
            Create an account
          </h2>
          <p className='text-sm'>Please fill in your information to sign up</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className='flex flex-col space-y-5'>
          {isError && (
            <Alert
              variant='light'
              color='red'
              title={error.message}
              icon={<BiError />}
            />
          )}
          <Controller
            control={control}
            disabled={isPending || isMutating}
            rules={{ required: "Full name is required" }}
            name='fullName'
            render={({ field }) => (
              <TextInput
                error={errors.fullName?.message}
                {...field}
                label='Full Name'
                placeholder='John Doe'
              />
            )}
          />
          <Controller
            control={control}
            disabled={isPending || isMutating}
            rules={{ required: "Email is required" }}
            name='email'
            render={({ field }) => (
              <TextInput
                error={errors.email?.message}
                {...field}
                label='Email'
                placeholder='user@example.com'
              />
            )}
          />
          <Controller
            control={control}
            disabled={isPending || isMutating}
            rules={{ required: "Password is required" }}
            name='password'
            render={({ field }) => (
              <PasswordInput
                label='Password'
                error={errors.password?.message}
                placeholder='Enter a secure password'
                {...field}
              />
            )}
          />
          <Button
            type='submit'
            disabled={isPending || isMutating}
            loading={isPending || isMutating}
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
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M9 12.7222H15'
                  stroke='#DDDDDD'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
                <path
                  d='M13 15.7222L16 12.7222L13 9.72217'
                  stroke='#DDDDDD'
                  strokeWidth='1.5'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                />
              </svg>
            }>
            Sign up
          </Button>
          <DevTool control={control} /> {/* set up the dev tool */}
        </form>

        <Divider label='or' labelPosition='center' my={"lg"} />

        <div className='flex flex-col space-y-4'>
          <SignIn
            provider='google'
            rightSection={
              <svg
                width='25'
                height='25'
                viewBox='0 0 25 25'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                xmlnsXlink='http://www.w3.org/1999/xlink'>
                <rect
                  x='0.5'
                  y='0.722168'
                  width='24'
                  height='24'
                  fill='url(#pattern0)'
                />
                <defs>
                  <pattern
                    id='pattern0'
                    patternContentUnits='objectBoundingBox'
                    width='1'
                    height='1'>
                    <use
                      xlinkHref='#image0_397_39692'
                      transform='scale(0.00125)'
                    />
                  </pattern>
                  <image
                    id='image0_397_39692'
                    width='800'
                    height='800'
                    xlinkHref='data:image/png;base64,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'
                  />
                </defs>
              </svg>
            }>
            {" "}
            Sign in with Google
          </SignIn>

          <SignIn provider='github' rightSection={<FaGithub />}>
            Sign in with Github
          </SignIn>
          {/* <Button disabled rightSection={<Badge color='red'>Beta</Badge>}>
            Sign up with Apple {""}
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='20'
              height='25'
              viewBox='0 0 20 25'
              fill='none'>
              <g clipPath='url(#clip0_397_39697)'>
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
          </Button> */}
          <p className='text-center text-sm pb-5'>
            By creating an account, you agree with our{" "}
            <Link className='underline underline-offset-2' href={"/"}>
              Terms of Service,
            </Link>
            and{" "}
            <Link className='underline underline-offset-2' href={"/"}>
              Privacy Policy
            </Link>
          </p>
          <div className='flex justify-center items-center space-x-2 text-sm'>
            <p>Already have an account?</p>
            <Link href={"/auth/login"}> Sign In</Link>
          </div>
        </div>
      </Card>
    </div>
  );
}

export default RightSideForm;
