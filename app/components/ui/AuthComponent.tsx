import { signIn, signOut } from "@/app/lib/auth";
import { Button } from "@mantine/core";

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

export function SignOut(props: React.ComponentPropsWithRef<typeof Button>) {
  return (
    <form
      action={async () => {
        await signOut();
      }}
      className=''>
      <Button variant='transparent' size='xs' {...props}>
        Sign Out
      </Button>
    </form>
  );
}
