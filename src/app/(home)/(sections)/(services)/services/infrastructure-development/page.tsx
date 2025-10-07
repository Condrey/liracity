import { PageTitle } from "@/components/page-utils";
import { cityServicesLinks } from "@/lib/constants";
import { Metadata } from "next";

const { title, description } = cityServicesLinks.find((val) => val.href === "/services/infrastructure-development")!;
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
