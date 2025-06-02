import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { webName } from "@/lib/utils";
import { Metadata } from "next";
import StaffLogin from "./(staff-login)/staff-login";
import UserLogin from "./(user-login)/user-login";
import UserTypes from "./user-types";

export const generateMetadata=async ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}): Promise<Metadata> => {
  const userType = (await searchParams)['user'] || 'Civilian'
  return {title: "Login as a "+userType,} 
};
export default async function Page() {
  return (
    <main className="flex h-dvh items-center justify-center ">
      <div className="flex flex-row-reverse size-full   justify-center md:justify-end overflow-hidden ">
        <div className="w-full h-dvh flex flex-col sm:space-y-6 space-y-16 overflow-y-auto px-3 md:px-10 p-10 md:w-1/2 md:pt-[8rem]">
          <div className="space-y-1 text-center md:text-start ">
            <h1 className="text-3xl text-shadow font-bold uppercase">{`Login to ${webName}`}</h1>
            
          </div>

          <div className="space-y-3  max-w-md w-full mx-auto md:me-auto md:ms-0  ">
            <UserTypes />
          </div>
        </div>

        <div className=" hidden w-1/2   bg-cover mask-contain mask-no-repeat md:block h-dvh mask-[url(/uganda.png)] bg-[url(/hero.jpg)]" />
      </div>
    </main>
  );
}

