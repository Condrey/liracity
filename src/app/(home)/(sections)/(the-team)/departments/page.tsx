import { getAllOrganizationList } from "@/components/feature/organization/action";
import ButtonAddEditDepartment from "@/components/feature/organization/button-add-edit-organization";
import ListOfOrganizations from "@/components/feature/organization/list-of-organizations";
import { PageTitle } from "@/components/page-utils";
import { LINK_DEPARTMENTS, staffLinks } from "@/lib/constants";
import { PlusIcon } from "lucide-react";
import { Metadata } from "next";

const { title, description } = staffLinks.find((val) => val.href === LINK_DEPARTMENTS)!;
export const metadata: Metadata = {
	title,
	description
};
export default async function Page() {
	const departments = await getAllOrganizationList();
	return (
		<>
			<PageTitle heading={title}>
				<ButtonAddEditDepartment variant={"secondary"}>
					<PlusIcon />
				</ButtonAddEditDepartment>
			</PageTitle>
			<ListOfOrganizations initialData={departments} />
		</>
	);
}
