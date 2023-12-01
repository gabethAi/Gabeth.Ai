import { logoutUser } from "@/lib/actions";
import { signIn, signOut } from "@/lib/auth";
import { Button } from "@mantine/core";

interface AuthComponentProps {
  children: React.ReactNode;
  props?: React.ComponentPropsWithRef<typeof Button>;
}

export function SignIn({
  provider,
  ...props
}: { provider?: string } & React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        const url = await signIn(provider, { redirect: false });
        // TODO: fix in next-auth
        // redirect(url.replace("signin", "api/auth/signin"));
      }}>
      <Button {...props}>Sign In</Button>
    </form>
  );
}

export function SignOut({ props, children }: AuthComponentProps) {
  return (
    <form
      action={async () => {
        "use server";
        await logoutUser();
      }}
      className=''>
      <Button variant='transparent' type='submit' {...props}>
        {children ?? "Sign Out"}
      </Button>
    </form>
  );
}
