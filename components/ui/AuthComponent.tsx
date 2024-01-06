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
      <Button
        type='submit'
        variant='outline'
        fullWidth
        rightSection={rightSection}
        {...props}>
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
      <Button variant='light' size='sm' type='submit'>
        {children ?? "Sign Out"}
      </Button>
    </form>
  );
}
