import { PageTitle } from "@/components/page-utils";
import { cityMediaCenterLinks } from "@/lib/constants";
import { Metadata } from "next";

const { title, description } = cityMediaCenterLinks.find((val) => val.href === "/media/gallery-publications")!;
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
