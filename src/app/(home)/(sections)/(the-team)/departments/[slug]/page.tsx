import { getOrganizationBySlug } from "@/components/feature/organization/action";
import { ResponsiveBreadcrumb } from "@/components/responsive-breadcrumb";
import { LINK_DEPARTMENTS } from "@/lib/constants";
import { formatNumber } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageClient from "./page-client";

interface PageProps {
	params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { slug: encodedSlug } = await params;
	const slug = decodeURIComponent(encodedSlug);
	const department = await getOrganizationBySlug(slug);
	const departmentName = department?.name + " department";
	const numberOfSections = department?._count.teams;
	if (!department)
		return {
			title: "404-Department Not found"
		};
	return {
		title: departmentName,
		description: `${department?.about} with ${formatNumber(numberOfSections || 0)} sector${numberOfSections === 1 ? "" : "s"}`
	};
}

export default async function Page({ params }: PageProps) {
	const { slug: encodedSlug } = await params;
	const slug = decodeURIComponent(encodedSlug);
	const department = await getOrganizationBySlug(slug);
	if (!department) return notFound();
	const departmentName = department.name;

	return (
		<div className="space-y-8">
			<ResponsiveBreadcrumb
				breadcrumbs={[
					{ label: "Home", href: "/" },
					{ label: "Departments", href: LINK_DEPARTMENTS },
					{
						label: `${departmentName} department`,
						href: `${LINK_DEPARTMENTS}/${department.id}`
					}
				]}
			/>

			<PageClient department={department} slug={slug} />
		</div>
	);
}
