import { PageTitle } from "@/components/page-utils";
import { citySportsAndReactionLinks } from "@/lib/constants";
import { Metadata } from "next";

const { title, description } = citySportsAndReactionLinks.find((val) => val.href === "/sports/programs-clubs")!;
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
