"use client";
import { logOut, loginUserWithProvider } from "@/lib/actions";
import { Button } from "@mantine/core";

interface Props {
  readonly provider: string;
  readonly children?: React.ReactNode;
  readonly props?: React.ComponentPropsWithRef<typeof Button>;
  readonly rightSection?: React.ReactNode;
  readonly redirectTo?: string;
}

export function SignIn({
  provider,
  children,
  props,
  rightSection,
  redirectTo = "/chat",
}: Props) {
  return (
    <form
      action={async () => await loginUserWithProvider(provider, redirectTo)}>
      <Button type='submit' fullWidth rightSection={rightSection} {...props}>
        {children ?? "Sign In"}
      </Button>
    </form>
  );
}

export function SignOut({
  children,
  props,
}: {
  readonly children?: React.ReactNode;
  readonly props?: React.ComponentPropsWithRef<typeof Button>;
}) {
  return (
    <form action={logOut} className='w-full'>
      <Button variant='subtle' size='sm' type='submit' fullWidth {...props}>
        {children ?? "Sign Out"}
      </Button>
    </form>
  );
}
