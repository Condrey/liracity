"use client";

import { DataTable } from "@/components/data-table/data-table";
import { TypographyH3 } from "@/components/page-utils";
import { ButtonGroup } from "@/components/ui/button-group";
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import { TeamData } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { Edit3Icon, PlusIcon, Trash2Icon } from "lucide-react";
import ButtonAddEditTeam from "./button-add-edit-team";
import ButtonDeleteTeam from "./button-delete-team";
import { useTeamMembersColumns } from "./columns";
import ButtonAddTeamMembers from "./teamMembers/button-add-teammembers";

interface Props {
	team: TeamData;
}
export default function ListItemTeam({ team }: Props) {
	const {
		id: teamId,
		_count: { teammembers: numberOfStaffs },
		teammembers,
		organizationId,
		organization: { slug, name: organizationName },
		name: teamName
	} = team;
	const teamMembersColumns = useTeamMembersColumns(slug);

	return (
		<>
			{numberOfStaffs < 1 ? (
				<Item variant={"muted"}>
					<ItemContent>
						<ItemTitle>{teamName} section/ unit</ItemTitle>
						<ItemDescription>{`There are no members added in this section/ unit yet. All Added members shall Appear here.`}</ItemDescription>
					</ItemContent>
					<ItemActions>
						<ButtonAddEditTeam variant={"secondary"} organizationId={organizationId} team={team}>
							<Edit3Icon />
						</ButtonAddEditTeam>
						<ButtonDeleteTeam variant={"destructive"} team={team}>
							<Trash2Icon />
						</ButtonDeleteTeam>
						<ButtonAddTeamMembers
							organizationId={organizationId}
							organizationName={organizationName}
							teamId={teamId}
							teamName={teamName}
							variant={"outline"}
						>
							<PlusIcon /> Members
						</ButtonAddTeamMembers>
					</ItemActions>
				</Item>
			) : (
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
							<div className="flex flex-row items-center gap-3">
								<TypographyH3
									title={`${teamName} section/ unit`}
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
					<ButtonAddTeamMembers
						organizationId={organizationId}
						organizationName={organizationName}
						teamId={teamId}
						teamName={teamName}
						variant={"secondary"}
					>
						<PlusIcon />
					</ButtonAddTeamMembers>
				</DataTable>
			)}
		</>
	);
}
