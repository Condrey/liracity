"use client";

import { useOrganizationBySlugQuery } from "@/components/feature/organization/query";
import ErrorContainer from "@/components/query-containers/error-container";
import { OrganizationData } from "@/lib/types";
import { notFound } from "next/navigation";
import DepartmentContainer from "./department-container";

interface DepartmentContentProps {
	department: OrganizationData;
	slug: string;
}

export default function PageClient({ department, slug }: DepartmentContentProps) {
	const query = useOrganizationBySlugQuery({
		initialData: department,
		slug
	});

	const { data, status } = query;
	return (
		<div>
			{status === "error" ? (
				<ErrorContainer errorMessage="Failed to fetch department, please try again" query={query} />
			) : status === "success" && !data ? (
				notFound()
			) : (
				<div className="flex w-full justify-between gap-3 *:h-fit *:flex-1">
					<DepartmentContainer department={data!} />
				</div>
			)}
		</div>
	);
}
