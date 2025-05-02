import { webName } from "@/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import SignUpForm from "./signup-form";
export const metadata: Metadata = {
  title: "Sign up",
};
export default function Page() {
  return (
    <main className="flex h-dvh items-center justify-center ">
      <div className="flex flex-row-reverse size-full   justify-center md:justify-end overflow-hidden ">
        <div className="w-full space-y-10 max-w-md max-h-[30rem] my-auto overflow-y-auto p-4  md:w-1/2">
          <div className="space-y-1 text-center">
            <h1 className="text-3xl font-bold uppercase">{`Sign into ${webName}`}</h1>
            {/* <p className="text-muted-foreground">school motto here </p> */}
          </div>
          <div className="space-y-5">
            <SignUpForm />
            <Link href={`/login`} className="block text-center hover:underline">
              Already have an account? Login
            </Link>
          </div>
        </div>
        <div className=" hidden w-1/2  bg-cover mask-contain mask-no-repeat md:block mask-[url(/uganda.png)] bg-[url(/hero.jpg)]" />

        {/* <Image
          src={SignUpImage}
          alt=""
          className="hidden w-1/2 bg-foreground object-cover md:block"
        /> */}
      </div>
    </main>
  );
}
