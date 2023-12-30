import MobileAppBar from "../../components/ui/MobileAppBar";
import { DesktopSideBar } from "../../components/ui/SideBar";
import ThemeToggler from "../../components/ui/ThemeToggler";
import ShareChat from "../../components/ui/ShareChat";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import { getUser } from "@/lib/actions";
import { User } from "@/lib/db/schema";

export default async function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const user = await getUser();

  if (!user) {
    redirect(`/auth/login?next=/chat`);
  }

  return (
    <main className='flex flex-col lg:flex-row relative h-[100dvh] '>
      {/* AppBar For Mobile */}
      <div className='block lg:hidden'>
        <MobileAppBar />
      </div>

      {/* SideBar For Desktop */}
      <div className='hidden lg:block basis-1/3 2xl:basis-1/4'>
        <DesktopSideBar user={user as User} className='' />
      </div>

      <div className='grow relative'>
        <div className='hidden fixed right-8 lg:right-14 top-20 lg:top-8 z-50 md:flex items-center space-x-4 lg:space-x-6'>
          <ShareChat />
          <ThemeToggler variant='default'>Switch Theme </ThemeToggler>
        </div>

        {children}
      </div>
    </main>
  );
}
