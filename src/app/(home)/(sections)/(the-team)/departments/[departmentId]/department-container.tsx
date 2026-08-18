"use client";

import ButtonAddEditDepartment from "@/components/department/button-add-edit-department";
import ButtonAddEditDepartmentalSector from "@/components/departmental-sector/button-add-edit-departmental-sector";
import ListOfDepartmentalSectors from "@/components/departmental-sector/list-of-departmental-sectors";
import HeadOfDepartmentContainer from "@/components/head-of-department/head-of-department-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DepartmentData } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { Edit3Icon, PlusIcon } from "lucide-react";
import { Fragment } from "react";

interface DepartmentContainerProps {
	department: DepartmentData;
}
export default function DepartmentContainer({ department }: DepartmentContainerProps) {
	const { id, name, about, headOfDepartment, departmentalSectors, _count } = department;
	return (
		<div className="space-y-6">
			<CardHeader>
				<Fragment>
					<CardTitle className="text-lg font-bold tracking-tight uppercase sm:text-xl">
						<span>{name} department</span>
						<ButtonAddEditDepartment department={department} size="icon" variant={"outline"} className="ml-2">
							<Edit3Icon />
						</ButtonAddEditDepartment>
					</CardTitle>
					{about && (
						<CardDescription>
							<div className="typeset typeset-notes max-w-[37em]">
								<TipTapViewer content={about} className="max-w-prose text-justify hyphens-auto" />
							</div>
						</CardDescription>
					)}
				</Fragment>
			</CardHeader>
			<HeadOfDepartmentContainer
				employee={headOfDepartment}
				departmentId={department.id}
				className="mx-auto flex w-full max-w-sm flex-col lg:hidden"
			/>

			<CardContent className="px-3 md:px-6">
				<div className="flex items-center gap-3">
					<h1
						data-name={name}
						className="text-xl font-bold tracking-tight capitalize md:before:pe-2 md:before:content-[attr(data-name)]"
					>
						Departmental sections{" "}
						<span className="font-normal text-muted-foreground slashed-zero tabular-nums">
							({formatNumber(_count.departmentalSectors)})
						</span>
					</h1>
					<ButtonAddEditDepartmentalSector departMentId={id} size={"icon"} variant={"outline"}>
						<PlusIcon className="size-4" />
					</ButtonAddEditDepartmentalSector>
				</div>
				<ListOfDepartmentalSectors departmentalSectors={departmentalSectors} departMentId={id} />
			</CardContent>
		</div>
	);
}
