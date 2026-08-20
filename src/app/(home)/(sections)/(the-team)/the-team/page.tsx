import { PageTitle } from "@/components/page-utils";
import { Metadata } from "next";
import PageClient from "./page-client";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

const { title, description } = {
	title: "The team",
	description: `Explore the focus areas and functions of the city council.`
};

export const metadata: Metadata = {
	title,
	description
};
export default function Page() {
	return (
		<div className="">
			<PageTitle heading={title} />
			<PageClient />
		</div>
	);
}
