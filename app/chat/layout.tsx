import MobileAppBar from "../../components/ui/MobileAppBar";
import { DesktopSideBar } from "../../components/ui/SideBar";
import ThemeToggler from "../../components/ui/ThemeToggler";
import ShareChat from "../../components/ui/ShareChat";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Layout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  const user = await auth();

  if (!user) {
    redirect(`/auth/login?next=/chat`);
  }

  return (
    <main className=''>
      {/* AppBar For Mobile */}
      <div className='block lg:hidden'>
        <MobileAppBar />
      </div>

      {/* SideBar For Desktop */}

      <div className='grid grid-cols-1 lg:grid-cols-8 xl:grid-cols-10 relative '>
        <div className='hidden lg:block lg:col-span-3  dark:bg-black'>
          <DesktopSideBar />
        </div>

        <div className='lg:col-span-5 xl:col-span-7 relative min-h-[90dvh]'>
          <div className='absolute right-8 lg:right-14 top-8 z-50 flex items-center space-x-4 lg:space-x-6'>
            <ShareChat />
            <ThemeToggler>Switch Theme </ThemeToggler>
          </div>

          {children}
        </div>
      </div>
    </main>
  );
}
