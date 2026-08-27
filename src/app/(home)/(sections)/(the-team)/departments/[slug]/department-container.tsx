"use client";

import ButtonAddEditDepartment from "@/components/feature/organization/button-add-edit-organization";
import ButtonDeleteOrganization from "@/components/feature/organization/button-delete-organization";
import ListOfMembers from "@/components/feature/organization/members/list-of-members";
import ButtonAddEditTeam from "@/components/feature/organization/team/button-add-edit-team";
import ListOfTeams from "@/components/feature/organization/team/list-of-teams";
import { PageTitle } from "@/components/page-utils";
import { ButtonGroup } from "@/components/ui/button-group";
import { OrganizationData } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { Edit3Icon, PlusIcon, Trash2Icon } from "lucide-react";

interface DepartmentContainerProps {
	department: OrganizationData;
}
export default function DepartmentContainer({ department }: DepartmentContainerProps) {
	const { id, name, _count, members, teams, slug } = department;
	return (
		<div className="space-y-12 divide-y divide-dotted px-3 *:space-y-4 md:px-6">
			<div>
				<PageTitle heading={`${name} department`}>
					<ButtonGroup>
						<ButtonAddEditDepartment organization={department} size="icon" variant={"secondary"}>
							<Edit3Icon />
						</ButtonAddEditDepartment>
						<ButtonDeleteOrganization organization={department} size="icon">
							<Trash2Icon />
						</ButtonDeleteOrganization>
					</ButtonGroup>
				</PageTitle>
				{/* iterate the members in the department */}
				<ListOfMembers initialData={members} organizationId={id} organizationSlug={slug} />
			</div>
			<div>
				<PageTitle heading={`${name} sections/ units : ${formatNumber(_count.teams)} `}>
					<ButtonAddEditTeam organizationId={id} size={"icon"} variant={"secondary"}>
						<PlusIcon className="size-4" />
					</ButtonAddEditTeam>
				</PageTitle>
				{/* iterate the different teams and their members */}
				<ListOfTeams organizationId={id} teams={teams} />
			</div>
		</div>
	);
}
