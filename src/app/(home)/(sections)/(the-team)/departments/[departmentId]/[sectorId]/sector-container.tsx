"use client";

import ButtonAddEditDepartmentalSector from "@/components/departmental-sector/button-add-edit-departmental-sector";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { DepartmentalSectorData } from "@/lib/types";
import { Edit3Icon } from "lucide-react";
import { Fragment } from "react";
import ListOfSectorEmployees from "./list-of-sector-employees";
import SectorSideBar from "./sector-side-bar";

interface SectorContainerProps {
	departmentalSector: DepartmentalSectorData;
}
export default function SectorContainer({ departmentalSector }: SectorContainerProps) {
	const { name, description } = departmentalSector;
	return (
		<div className="space-y-6">
			{/* optionally show department details on small screens  */}
			<SectorSideBar sector={departmentalSector} className="lg:hidden hidden md:flex flex-col w-full " />
			{/* Sector information  */}
			<div className=" px-3">
				<Fragment>
					<CardTitle className="uppercase tracking-tight font-bold text-lg sm:text-xl">
						<span>{name} section</span>
						<ButtonAddEditDepartmentalSector
							departMentId={departmentalSector.departMentId!}
							departmentalSector={departmentalSector}
							size="icon"
							variant={"outline"}
							className="ml-2"
						>
							<Edit3Icon />
						</ButtonAddEditDepartmentalSector>
					</CardTitle>
					{description && (
						<CardDescription>
							<TipTapViewer content={description} className="max-w-prose text-justify hyphens-auto" />
						</CardDescription>
					)}
				</Fragment>
			</div>

			{/* show the employees  */}
			<ListOfSectorEmployees sector={departmentalSector} />
		</div>
	);
}
