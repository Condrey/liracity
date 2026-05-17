import { webName } from "@/lib/utils";
import { MoveRightIcon } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";
import Agreement from "../agreement";
import SignUpForm from "./signup-form";
export const metadata: Metadata = {
	title: "Self registration"
};
export default function Page() {
	return (
		<main className="flex h-dvh items-center justify-center">
			<div className="flex size-full flex-row-reverse justify-center overflow-hidden md:justify-end">
				<div className="flex h-dvh w-full flex-col space-y-16 overflow-y-auto p-10 px-3 sm:space-y-6 md:w-2/5 md:px-10">
					<div className="space-y-1 text-center md:text-start">
						<h1 className="text-shadow text-3xl font-bold uppercase">{`Sign in to ${webName}`}</h1>
						{/* <p className="text-muted-foreground">school motto here </p> */}
					</div>
					<div className="max-w-md space-y-2 rounded-md md:bg-secondary/50 md:px-3 md:py-5 md:backdrop-blur-2xl dark:md:border dark:md:bg-secondary">
						<SignUpForm />
					</div>
				</div>
				<div className="hidden h-dvh w-3/5 bg-gradient-to-bl from-black via-yellow-500 to-red-500 md:block dark:from-black/20 dark:via-yellow-500/20 dark:to-red-500/20">
					<div className="h-dvh bg-[url(/hero.jpg)] mask-[url(/uganda.png)] bg-cover mask-contain mask-no-repeat" />
				</div>
				{/* <Image
          src={SignUpImage}
          alt=""
          className="hidden w-1/2 bg-foreground object-cover md:block"
        /> */}
			</div>
		</main>
	);
}
