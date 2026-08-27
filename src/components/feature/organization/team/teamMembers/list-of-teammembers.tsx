"use client";

import { DataTable } from "@/components/data-table/data-table";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { MemberData } from "@/lib/types";
import { MailIcon, PlusIcon, UsersIcon } from "lucide-react";
import ButtonInviteMember from "../invitations/button-invite-member";
import ButtonAddMember from "./button-add-teammember";
import { useMembersColumns } from "./columns";
import { useOrganizationMembersQuery } from "./query";

interface Props {
	initialData: MemberData[];
	organizationSlug?: string;
	organizationId: string;
}

export default function ListOfMembers({ initialData, organizationSlug, organizationId }: Props) {
	const query = useOrganizationMembersQuery({
		organizationSlug,
		organizationId,
		initialData
	});
	const columns = useMembersColumns(organizationSlug || organizationId!);
	const { data: members, status, error } = query;
	if (status === "error") {
		return <ErrorContainer errorMessage={`Failed to fetch members. ${error.message} `} query={query} />;
	}
	if (!members.length) {
		return (
			<EmptyContainer
				icon={UsersIcon}
				message="No members"
				description="There are no added members for this department."
			>
				<ButtonAddMember organizationId={organizationId}>Add Member</ButtonAddMember>
			</EmptyContainer>
		);
	}
	return (
		<DataTable
			data={members}
			columns={columns}
			filterColumn={{ id: "user_name", label: "member name" }}
			className="w-full"
		>
			<ButtonInviteMember size={"sm"} variant={"secondary"}>
				<MailIcon /> Member
			</ButtonInviteMember>
			<ButtonAddMember size={"sm"} variant={"secondary"} organizationId={organizationId}>
				<PlusIcon /> Member
			</ButtonAddMember>
		</DataTable>
	);
}
