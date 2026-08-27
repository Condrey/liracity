import { Metadata } from "next";
import { Suspense } from "react";
import SignUpForm from "./form-sign-up";

export const metadata: Metadata = {
	title: "Self Registration"
};
export default function Page() {
	return (
		<main className="flex min-h-svh flex-col items-center justify-center px-4">
			<Suspense>
				<SignUpForm />
			</Suspense>
		</main>
	);
}
