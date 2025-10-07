import { PageTitle } from "@/components/page-utils";
import { Metadata } from "next";

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
		<div className="">
			<PageTitle heading={title} />
		</div>
	);
}
