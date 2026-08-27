import EmptyContainer from "@/components/query-containers/empty-container";
import { TeamData } from "@/lib/types";
import ButtonAddEditTeam from "./button-add-edit-team";
import ListItemTeam from "./list-item-team";

interface Props {
	teams: TeamData[];
	organizationId: string;
}

export default function ListOfTeams({ teams: sections, organizationId }: Props) {
	return (
		<div>
			{!sections.length ? (
				<EmptyContainer
					message="There are no Sections"
					description={"There are no sections added in the database yet, please add if this department has a section"}
					className="min-h-[10rem]"
				>
					<ButtonAddEditTeam variant={"secondary"} organizationId={organizationId}>
						Add a new section
					</ButtonAddEditTeam>
				</EmptyContainer>
			) : (
				<div className="space-y-8">
					{sections.map((sector) => (
						<ListItemTeam key={sector.id} team={sector} />
					))}
				</div>
			)}
		</div>
	);
}
