import PageContainer from "@/components/page-container";
import { PageTitle } from "@/components/page-utils";
import { Metadata } from "next";
import PageClient from "./page-client";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

const { title, description } = {
	title: "Media center",
	description: `Stay updated with the latest from the city council.`
};

export const metadata: Metadata = {
	title,
	description
};
export default function Page() {
	return (
		<PageContainer className="max-w-9xl">
			<PageTitle heading={title} />
			<PageClient />
		</PageContainer>
	);
}
