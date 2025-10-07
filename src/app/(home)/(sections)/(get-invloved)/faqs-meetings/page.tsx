import { PageTitle } from "@/components/page-utils";
import { cityGetInvolvedLinks } from "@/lib/constants";
import { Metadata } from "next";

const { title, description } = cityGetInvolvedLinks.find((val) => val.href === "/faqs-meetings")!;
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
