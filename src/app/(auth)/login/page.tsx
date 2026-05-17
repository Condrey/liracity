import { validateRequest } from "@/auth";
import { webName } from "@/lib/utils";
import { Metadata } from "next";
import UserTypes from "./user-types";

export const generateMetadata = async ({
	searchParams
}: {
	searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}): Promise<Metadata> => {
	const userType = (await searchParams)["user"] || "Civilian";
	return { title: "Login as a " + userType };
};

export default async function Page() {
	const user = await validateRequest();
	return (
		<main className="flex h-dvh items-center justify-center">
			<div className="flex size-full flex-row-reverse justify-center overflow-hidden md:justify-end">
				<div className="flex h-dvh w-full flex-col space-y-16 overflow-y-auto p-10 px-3 sm:space-y-6 md:w-2/5 md:px-10">
					{/* <pre>{JSON.stringify(user,null,2)}</pre> */}
					<div className="space-y-1 text-center md:text-start">
						<h1 className="text-shadow text-3xl font-bold uppercase">{`Login to ${webName}`}</h1>
					</div>

					<div className="mx-auto w-full max-w-md space-y-3 md:mx-0 md:me-auto">
						<UserTypes />
					</div>
				</div>

				<div className="hidden h-dvh w-3/5 bg-gradient-to-bl from-primary md:block dark:from-primary/50">
					<div className="h-dvh bg-[url(/hero.jpg)] mask-[url(/uganda.png)] bg-cover mask-contain mask-no-repeat" />
				</div>
			</div>
		</main>
	);
}
