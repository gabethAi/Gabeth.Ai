import { signIn, signOut } from "@/auth";
import { Button } from "@mantine/core";

interface Props {
  readonly provider?: string;
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
      action={async () => {
        "use server";
        await signIn(provider, {
          redirectTo: redirectTo,
        });
      }}>
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
    <form
      action={async () => {
        "use server";
        await signOut();
      }}
      className='w-full'>
      <Button variant='subtle' size='sm' type='submit' fullWidth {...props}>
        {children ?? "Sign Out"}
      </Button>
    </form>
  );
}
