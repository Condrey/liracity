"use client";

import { OrganizationData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { getAllOrganizationList, getOrganizationBySlug } from "./action";

export const useOrganizationsQuery = (initialData: OrganizationData[]) => {
	return useQuery({
		queryKey: ["list-of-organizations"],
		queryFn: getAllOrganizationList,
		initialData
	});
};

export const useOrganizationBySlugQuery = ({ initialData, slug }: { initialData: OrganizationData; slug: string }) => {
	return useQuery({
		queryKey: ["department", "slug", slug],
		queryFn: async () => getOrganizationBySlug(slug),
		initialData,
		refetchOnWindowFocus: false
	});
};
