import { PageTitle } from "@/components/page-utils";
import { Metadata } from "next";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

const { title, description } = {
	title: "Opportunities",
	description: "Explore opportunities to grow and serve."
};

export const metadata: Metadata = {
	title,
	description
};
export default function Page() {
	return (
		<div className="">
			<PageTitle heading={title} />
		</div>
	);
}
