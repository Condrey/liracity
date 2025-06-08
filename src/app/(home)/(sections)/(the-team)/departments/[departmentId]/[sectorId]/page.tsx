import BodyContainer from "@/app/(home)/body-container";
import { ResponsiveBreadcrumb } from "@/components/responsive-breadcrumb";
import { formatNumber } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDepartmentalSectorById } from "../../../../../../../components/departmental-sector/action";
import SectorContent from "./sector-content";

interface PageProps {
  params: Promise<{ sectorId: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { sectorId } = await params;
  const id = decodeURIComponent(sectorId);
  const sector = await getDepartmentalSectorById(id);
  const sectorName = sector?.name;
  const numberOfEmployees = sector?._count.employees;
  const department = sector?.departMent?.name;
  return {
    title: `${sectorName} - ${department} department`,
    description: `${
      sector?.description
    }. The ${sectorName} sector is under ${department} department. It contains about
     ${formatNumber(numberOfEmployees || 0)} staff${
       numberOfEmployees === 1 ? "" : "s"
     }`,
  };
}

export default async function Page({ params }: PageProps) {
  const { sectorId } = await params;
  const id = decodeURIComponent(sectorId);
  const sector = await getDepartmentalSectorById(id);
  if (!sector) return notFound();

  return (
    <BodyContainer className="max-w-7xl">
      <ResponsiveBreadcrumb
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          {
            label: `${sector.departMent?.name} department`,
            href: `/departments/${sector?.departMentId}`,
          },
          {
            label: `${sector.name}`,
            href: `/departments/${sector?.departMentId}/${sector.id}`,
          },
        ]}
      />

      <SectorContent sector={sector} />
    </BodyContainer>
  );
}
