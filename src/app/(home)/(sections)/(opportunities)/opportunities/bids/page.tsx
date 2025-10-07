import { PageTitle } from "@/components/page-utils";
import { cityOpportunityLinks } from "@/lib/constants";
import { Metadata } from "next";

const { title, description } = cityOpportunityLinks.find((val) => val.href === "/opportunities/bids")!;
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
