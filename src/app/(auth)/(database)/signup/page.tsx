import { webName } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Agreement from "../agreement";
import SignUpForm from "./signup-form";
export const metadata: Metadata = {
  title: "Self registration",
};
export default function Page() {
  return (
    <main className="flex h-dvh items-center justify-center ">
      <div className="flex flex-row-reverse size-full   justify-center md:justify-end overflow-hidden ">
        <div className="w-full space-y-16 sm:space-y-6 max-w-md h-dvh flex flex-col justify-center my-auto overflow-y-auto p-4  md:w-1/2">
          <div className="space-y-1 text-center md:text-start ">
            <h1 className="text-3xl text-shadow font-bold uppercase">{`Sign into ${webName}`}</h1>
            {/* <p className="text-muted-foreground">school motto here </p> */}
          </div>
          <div className="space-y-2">
            <SignUpForm />
            <Agreement className="text-center mb-6" />
            <Link
              href={`/login`}
              className="block text-center group/link hover:text-primary"
            >
              <span className="underline">
                Already have an account? <strong>Login</strong>
              </span>
              <MoveRightIcon className="ms-2 group-hover/link:visible inline  invisible transition-all ease-in delay-200 " />
            </Link>
          </div>
        </div>
        <div className=" hidden w-1/2   bg-cover mask-contain mask-no-repeat md:block h-dvh mask-[url(/uganda.png)] bg-[url(/hero.jpg)]" />

        {/* <Image
          src={SignUpImage}
          alt=""
          className="hidden w-1/2 bg-foreground object-cover md:block"
        /> */}
      </div>
    </main>
  );
}
