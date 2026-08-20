import { PageTitle } from "@/components/page-utils";
import { cityMediaCenterLinks } from "@/lib/constants";
import { Metadata } from "next";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

const { title, description } = cityMediaCenterLinks.find((val) => val.href === "/media/gallery")!;
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
