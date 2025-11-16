import { PageDescription, PageTitle } from "@/components/page-utils";
import Chart from "./chart";

import BodyContainer from "@/app/(home)/body-container";
import { whatWeDoLinks } from "@/lib/constants";
import prisma from "@/lib/prisma";
import { departmentDataInclude } from "@/lib/types";
import { Metadata } from "next";

const { title, description } = whatWeDoLinks.find((val) => val.href === "/hierarchy")!;
export const metadata: Metadata = {
	title,
	description
};
export default async function Page() {
	const departments = await prisma.departMent.findMany({
		include: departmentDataInclude
	});
	return (
		<BodyContainer className="max-w-7xl px-0">
			<div className="space-y-2 max-w-3xl w-full me-auto">
				<PageTitle heading={`${title}/ Organography`} />
				<PageDescription paragraph={pageDescription} className="me-auto" />
			</div>
			<Chart departments={departments} />
		</BodyContainer>
	);
}

const pageDescription = `Lira City Council works through a number of departments that handle different aspects of city life.
Each department oversees key sectors that help keep our city running smoothly and efficiently.
This page gives you a quick look at the departments and the areas they’re responsible for.
It’s here to help you know who does what — and where to go when you need support or services.`;
