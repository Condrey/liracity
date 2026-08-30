"use client";

import { DataTable } from "@/components/data-table/data-table";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { MemberData } from "@/lib/types";
import { UsersIcon } from "lucide-react";
import { useAllMembersColumns } from "./columns-all-members";
import { useAllMembersQuery } from "./query";
import { TypographyH4 } from "@/components/page-utils";

interface Props {
	initialData: MemberData[];
}

export default function ListOfMembers({ initialData }: Props) {
	const query = useAllMembersQuery({
		initialData
	});
	const columns = useAllMembersColumns("");
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
			></EmptyContainer>
		);
	}
	return (
		<DataTable
			data={members}
			columns={columns}
			filterColumn={{ id: "user_name", label: "member name" }}
			tableHeaderSection={
				<TypographyH4 title='List of Technical Staffs' className="pt-4"/>
			}
			className="w-full"
		></DataTable>
	);
}
