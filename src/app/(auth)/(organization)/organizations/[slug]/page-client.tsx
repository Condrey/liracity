"use client";

import { getOrganizationBySlug } from "@/components/feature/organization/action";
// import ListOfMembers from "@/components/feature/organization/members/list-of-members";
import SlugOrganizationDetails from "@/components/feature/organization/slug-organization-details";
import ErrorContainer from "@/components/query-containers/error-container";
import { ActiveOrganization } from "@/lib/auth";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";

interface Props {
	slug: string;
	initialData: ActiveOrganization;
}

export default function PageClient({ slug, initialData }: Props) {
	const query = useQuery({
		queryKey: ["organization", "slug", slug],
		queryFn: async () => getOrganizationBySlug(slug),
		initialData
	});
	const { status, error, data: organization } = query;
	if (status === "error") {
		return <ErrorContainer errorMessage={error.message} query={query} />;
	}
	if (!organization) notFound();
	return (
		<div className="mx-auto flex max-w-9xl flex-col gap-4 xl:flex-row">
			<SlugOrganizationDetails organization={organization} className="max-h-fit w-full md:max-w-sm" />
			{/* <ListOfMembers
				initialData={organization.members}
				organizationSlug={organization.slug}
				organizationId={organization.id}
			/> */}
		</div>
	);
}
