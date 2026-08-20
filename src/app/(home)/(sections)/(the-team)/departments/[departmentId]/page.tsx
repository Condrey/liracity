import { ResponsiveBreadcrumb } from "@/components/responsive-breadcrumb";
import { formatNumber } from "@/lib/utils";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getDepartmentById } from "../../../../../../components/department/action";
import DepartmentContent from "./department-content";

// TODO: Cache Components adoption. Refactor this route so this opt-out can be removed.
// See: https://nextjs.org/docs/app/guides/migrating-to-cache-components

interface PageProps {
	params: Promise<{ departmentId: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
	const { departmentId } = await params;
	const id = decodeURIComponent(departmentId);
	const department = await getDepartmentById(id);
	const departmentName = department?.name + " department";
	const numberOfSectors = department?._count.departmentalSectors;
	return {
		title: departmentName,
		description: `${department?.about}. The ${departmentName} is headed by ${
			department?.headOfDepartment?.user.name || ": [Not yet assigned]"
		} with ${formatNumber(numberOfSectors || 0)} sector${numberOfSectors === 1 ? "" : "s"}`
	};
}

export default async function Page({ params }: PageProps) {
	const { departmentId } = await params;
	const id = decodeURIComponent(departmentId);
	const department = await getDepartmentById(id);
	if (!department) return notFound();
	const departmentName = department.name;

	return (
		<div className="max-w-7xl pt-4">
			<ResponsiveBreadcrumb
				breadcrumbs={[
					{ label: "Home", href: "/" },
					{ label: "Departments", href: "/departments" },
					{
						label: `${departmentName} department`,
						href: `/departments/${departmentId}`
					}
				]}
			/>

			<DepartmentContent department={department} />
		</div>
	);
}
