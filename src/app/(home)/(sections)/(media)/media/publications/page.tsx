import { PageTitle } from "@/components/page-utils";
import { cityMediaCenterLinks, LINK_PUBLICATIONS } from "@/lib/constants";
import { Metadata } from "next";

const { title, description } = cityMediaCenterLinks.find((val) => val.href === LINK_PUBLICATIONS)!;
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
