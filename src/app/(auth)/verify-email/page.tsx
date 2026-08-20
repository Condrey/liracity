import { Metadata } from "next";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

export const metadata: Metadata = {
	title: "Verify Email"
};
export default function Page() {
	return <main className="flex min-h-svh flex-col items-center justify-center px-4"></main>;
}
