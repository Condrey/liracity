import { getDepartmentalSectorById } from "@/components/departmental-sector/action";
import { ResponsiveBreadcrumb } from "@/components/responsive-breadcrumb";
import { formatNumber } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import SectorContent from "./sector-content";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

interface PageProps {
	params: Promise<{ sectorId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { sectorId } = await params;
	const id = decodeURIComponent(sectorId);
	const sector = await getDepartmentalSectorById(id);
	const sectorName = sector?.name;
	const numberOfEmployees = sector?._count.employees;
	const department = sector?.departMent?.name;
	return {
		title: `${sectorName} - ${department} department`,
		description: `${sector?.description}. The ${sectorName} sector is under ${department} department. It contains about
     ${formatNumber(numberOfEmployees || 0)} staff${numberOfEmployees === 1 ? "" : "s"}`
	};
}

export default async function Page({ params }: PageProps) {
	const { sectorId } = await params;
	const id = decodeURIComponent(sectorId);
	const sector = await getDepartmentalSectorById(id);
	if (!sector) return notFound();

	return (
		<div className="max-w-7xl pt-4">
			<ResponsiveBreadcrumb
				breadcrumbs={[
					{ label: "Home", href: "/" },
					{ label: "Departments", href: "/departments" },
					{
						label: `${sector.departMent?.name} department`,
						href: `/departments/${sector?.departMentId}`
					},
					{
						label: `${sector.name}`,
						href: `/departments/${sector?.departMentId}/${sector.id}`
					}
				]}
			/>

			<SectorContent sector={sector} />
		</div>
	);
}
