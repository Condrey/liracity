import DataTableLoadingSkeleton from "@/components/data-table/data-table-loading-skeleton";
import { getAllMembers } from "@/components/feature/organization/members/action";
import ListOfMembers from "@/components/feature/organization/members/list-of-members";
import { PageTitle } from "@/components/page-utils";
import { LINK_TECHNICAL_STAFFS, staffLinks } from "@/lib/constants";
import { Metadata } from "next";
import { Suspense } from "react";

const { title, description } = staffLinks.find((q) => q.href === LINK_TECHNICAL_STAFFS)!;

export const metadata: Metadata = {
	title,
	description
};

export default function Page() {
	return (
		<div className="space-y-6 pt-6">
			<PageTitle heading={title} />
			<Suspense fallback={<DataTableLoadingSkeleton />}>
				<AllStaffs />
			</Suspense>
		</div>
	);
}

async function AllStaffs() {
	const allStaffs = await getAllMembers();

	return (
		<div className="pt-8">
			<ListOfMembers initialData={allStaffs} />
		</div>
	);
}
