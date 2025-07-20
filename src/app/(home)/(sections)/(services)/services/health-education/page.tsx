import { PageTitle } from "@/components/page-utils";
import { useCityServicesLinks } from "@/components/user/constants";
import { Metadata } from "next";

const { title, description } = useCityServicesLinks.find((val) => val.href === "/services/health-education")!;
export const metadata: Metadata = {
	title,
	description
};
export default function Page() {
	return (
		<div className="pt-[85px]">
			<PageTitle heading={title} />
		</div>
	);
}
