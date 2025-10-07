import { PageTitle } from "@/components/page-utils";
import { Metadata } from "next";

const { title, description } = {
	title: "Get involved",
	description: "Contact, engage, and share feedback with the council."
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
