import { validateRequest } from "@/auth";
import Footer from "@/components/user/footer";
import TopAppBar from "@/components/user/top-app-bar";
import SessionProvider from "../session-provider";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { session, user } = await validateRequest();

  return (
    <SessionProvider value={{ session, user }}>
      <div className=" h-full overflow-hidden w-full">
        <header className="fixed top-0 z-50 w-full bg-card/10 backdrop-blur-sm py-1 md:py-3">
          <TopAppBar className="w-full max-w-7xl mx-auto  px-3 " />
        </header>
        <main className=" size-full  overflow-y-auto scroll-auto flex flex-col gap-8 ">
          <div className=" max-w-[70rem]  mx-auto w-full  min-h-[75vh] ">
            {children}
          </div>
          <footer className="">
            <Footer className="  bg-black/80 *:p-4 w-full  text-background dark:text-foreground " />
          </footer>
        </main>
      </div>
    </SessionProvider>
  );
}
