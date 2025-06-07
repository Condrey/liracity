import BodyContainer from "@/app/(home)/body-container";
import { ResponsiveBreadcrumb } from "@/components/responsive-breadcrumb";
import { formatNumber } from "@/lib/utils";
import { Metadata } from "next";
import { getDepartmentById } from "../action";
import DepartmentContainer from "../department-container";
import { notFound } from "next/navigation";

interface PageProps {
  params: Promise<{ departmentId: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { departmentId } = await params;
  const id = decodeURIComponent(departmentId);
  const department = await getDepartmentById(id);
  const departmentName = department?.name + " department";
  const numberOfSectors = department?._count.departmentalSectors;
  return {
    title: departmentName,
    description: `${department?.about}. The ${departmentName} is headed by ${
      department?.headOfDepartment?.user.name || ": [Not yet assigned]"
    } with ${formatNumber(numberOfSectors || 0)} sector${
      numberOfSectors === 1 ? "" : "s"
    }`,
  };
}

export default async function Page({ params }: PageProps) {
  const { departmentId } = await params;
  const id = decodeURIComponent(departmentId);
  const department = await getDepartmentById(id);
  if (!department) return notFound();
  const departmentName = department.name;

  return (
    <BodyContainer>
      <ResponsiveBreadcrumb
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Departments", href: "/departments" },
          {
            label: `${departmentName} department`,
            href: `/departments/${departmentId}`,
          },
        ]}
      />
      <div className=""></div>
      <DepartmentContainer department={department} numbering={undefined} />
    </BodyContainer>
  );
}
