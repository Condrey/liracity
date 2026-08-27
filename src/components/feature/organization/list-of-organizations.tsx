"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { OrganizationData } from "@/lib/types";
import { ItemGroup } from "../../ui/item";
import ButtonAddEditOrganization from "./button-add-edit-organization";
import { ListItemOrganization } from "./list-item-organization";
import { useOrganizationsQuery } from "./query";

export default function ListOfOrganizations({ initialData }: { initialData: OrganizationData[] }) {
	const query = useOrganizationsQuery(initialData);
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
		<ItemGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
			{data.map((organization) => (
				<ListItemOrganization key={organization.id} organization={organization} />
			))}
		</ItemGroup>
	);
}
