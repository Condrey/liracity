import { PageDescription, PageTitle } from "@/components/page-utils";
import Chart from "./chart";

import { staffLinks } from "@/lib/constants";
import { Metadata } from "next";

const { title, description } = staffLinks.find((val) => val.href === "/hierarchy")!;
export const metadata: Metadata = {
	title,
	description
};
export default async function Page() {
	return (
		<div className="max-w-7xl px-0">
			<div className="me-auto w-full max-w-3xl space-y-2">
				<PageTitle heading={`${title}/ Organography`} />
				<PageDescription paragraph={pageDescription} className="me-auto" />
			</div>
			<Chart />
		</div>
	);
}

const pageDescription = `Lira City Council works through a number of departments that handle different aspects of city life.
Each department oversees key sectors that help keep our city running smoothly and efficiently.
This page gives you a quick look at the departments and the areas they’re responsible for.
It’s here to help you know who does what — and where to go when you need support or services.`;
