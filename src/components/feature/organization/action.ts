"use server";

import { auth } from "@/lib/auth";
import { validateRequest } from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { organizationDataInclude } from "@/lib/types";
import { organizationSchema, OrganizationSchema } from "@/lib/validation";
import { Organization } from "better-auth/plugins";
import { headers } from "next/headers";
import { cache } from "react";

async function organizations() {
	const organizations = await prisma.organization.findMany({
		orderBy: [{ name: "asc" }],
		include: organizationDataInclude
	});
	return organizations;
}
export const getAllOrganizationList = cache(organizations);

export const getOrganizationById = cache(async (id: string) => {
	return await auth.api.getFullOrganization({
		query: {
			organizationId: id
		},
		headers: await headers()
	});
});

export const getOrganizationBySlug = cache(async (slug: string) => {
	return await prisma.organization.findUnique({
		where: {
			slug
		},
		include: organizationDataInclude
	});
});

export async function upsertOrganization(organization: OrganizationSchema) {
	const { session } = await validateRequest();
	const { name, slug, logo, metadata, id, keepCurrentActiveOrganization, about } =
		organizationSchema.parse(organization);
	const nextHeaders = await headers();
	// To edit the organization
	if (!id) {
		// throw Error(JSON.stringify({ id, name, len: id?.length }));
		// Check if the slug is taken
		await auth.api.checkOrganizationSlug({
			body: {
				slug
			}
		});
		return await auth.api.createOrganization({
			body: {
				name,
				slug,
				logo,
				keepCurrentActiveOrganization,
				userId: session?.userId,
				about
				// metadata
			},
			headers: nextHeaders
		});
	}
	// To create a new organization
	else {
		return await auth.api.updateOrganization({
			body: {
				data: {
					name,
					slug,
					logo,
					about
					// metadata
				},
				organizationId: id
			},
			headers: nextHeaders
		});
	}
}

export async function deleteOrganization(organization: Organization) {
	return await auth.api.deleteOrganization({
		body: {
			organizationId: organization.id
		},
		headers: await headers()
	});
}
