"use client";

import { DataTable } from "@/components/data-table/data-table";
import { TypographyH3 } from "@/components/page-utils";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { TeamData } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { Edit3Icon, PlusIcon, Trash2Icon } from "lucide-react";
import ButtonAddEditTeam from "./button-add-edit-team";
import ButtonDeleteTeam from "./button-delete-team";
import { useTeamMembersColumns } from "./columns";

interface Props {
	team: TeamData;
}
export default function ListItemTeam({ team }: Props) {
	const {
		_count: { teammembers: numberOfStaffs },
		teammembers,
		organizationId,
		organization: { slug },
		name
	} = team;
	const teamMembersColumns = useTeamMembersColumns(slug);

	return (
		<DataTable
			data={teammembers}
			columns={teamMembersColumns}
			tableHeaderSection={
				<div className="flex w-full flex-wrap items-start gap-3 py-3">
					<ButtonGroup className="">
						<ButtonAddEditTeam variant={"secondary"} organizationId={organizationId} team={team}>
							<Edit3Icon />
						</ButtonAddEditTeam>
						<ButtonDeleteTeam variant={"destructive"} team={team}>
							<Trash2Icon />
						</ButtonDeleteTeam>
					</ButtonGroup>
					<div className="">
						<TypographyH3
							title={`${name} section/ unit`}
							className="mb-0 pb-0 text-warning-foreground dark:text-warning"
						/>
						{!!numberOfStaffs && (
							<p className="font-sans text-xl text-muted-foreground oldstyle-nums slashed-zero tabular-nums">{`${formatNumber(numberOfStaffs)} staff${numberOfStaffs === 1 ? "" : "s"}`}</p>
						)}
					</div>
				</div>
			}
			filterColumn={{ id: "user_name", label: "member name" }}
			className="w-full"
		>
			<Button variant={"secondary"}>
				<PlusIcon />
			</Button>
		</DataTable>
	);
}
