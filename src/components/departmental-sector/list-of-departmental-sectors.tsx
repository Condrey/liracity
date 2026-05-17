import EmptyContainer from "@/components/query-containers/empty-container";
import { DepartmentalSectorData } from "@/lib/types";
import ButtonAddEditDepartmentalSector from "./button-add-edit-departmental-sector";
import DepartmentalSectorContainer from "./departmental-sector-container";
interface ListOfDepartmentalSectorsProps {
	departmentalSectors: DepartmentalSectorData[];
	departMentId: string;
}

export default function ListOfDepartmentalSectors({
	departmentalSectors: sectors,
	departMentId
}: ListOfDepartmentalSectorsProps) {
	return (
		<div>
			{!sectors.length ? (
				<EmptyContainer
					message={"There are no departmental sections added in the database yet, please add"}
					className="min-h-[10rem]"
				>
					<ButtonAddEditDepartmentalSector variant={"secondary"} departMentId={departMentId}>
						Add a new section
					</ButtonAddEditDepartmentalSector>
				</EmptyContainer>
			) : (
				<div className="flex w-full flex-col gap-4">
					<p className="text-lg italic">
						The following are the various sections and their positions under this department;
					</p>
					<ul className="list-inside list-decimal space-y-6">
						{sectors.map((sector) => (
							<DepartmentalSectorContainer key={sector.id} departmentalSector={sector} />
						))}
					</ul>
				</div>
			)}
		</div>
	);
}
