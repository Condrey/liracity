"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { Organization } from "@/generated/prisma/client";
import { useQuery } from "@tanstack/react-query";
import { getAllOrganizations } from "./action";
import ButtonAddEditOrganization from "./button-add-edit-organization";
import { OrganizationContainer } from "./organization-container";

export default function ListOfOrganizations({ initialData }: { initialData: Organization[] }) {
	const query = useQuery({
		queryKey: ["list-of-organizations"],
		queryFn: getAllOrganizations,
		initialData
	});
	const { status, data, error } = query;

	if (status === "error") {
		return <ErrorContainer errorMessage={error.message} query={query} />;
	}
	if (!data.length) {
		return (
			<EmptyContainer
				message="No organizations in the database"
				description="All added organizations shall appear here."
			>
				<ButtonAddEditOrganization>Create Organization</ButtonAddEditOrganization>
			</EmptyContainer>
		);
	}
	return (
		<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
			{data.map((organization) => (
				<OrganizationContainer key={organization.id} organization={organization} />
			))}
		</div>
	);
}
