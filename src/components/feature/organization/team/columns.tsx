/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Spinner } from "@/components/ui/spinner";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { TeamMemberData } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpRightIcon } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import DataCellAssumedOffice from "../../employee/data-cell-assumed-office";
import DataCellCurrentPosition from "../../employee/data-cell-current-position";
import DataCellAdministrativeRole from "../../user/data-cell-administrative-role";
import DataCellUser from "../../user/data-cell-user";
import DataCellOrganization from "../data-cell-organization";

export const useTeamMembersColumns = (organizationSlug: string): ColumnDef<TeamMemberData>[] => [
	{
		id: "index",
		header: ({ column }) => <DataTableColumnHeader column={column} title="s/n" />,
		cell: ({ row }) => row.index + 1
	},
	{
		accessorKey: "user.name",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Member" />,
		cell: ({ row }) => <DataCellUser user={row.original.user} />
	},
	{
		accessorKey: "user.role",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Staff Role" className="" />,
		cell({ row }) {
			const {
				user: { role: userRole },
				team: {
					name: teamName,
					organization: { name: organizationName }
				}
			} = row.original;

			return <DataCellOrganization organization={organizationName} userRole={userRole} team={teamName} />;
		}
	},
	{
		accessorKey: "employee.currentPosition.jobTitle",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Current Position" />,
		cell: ({ row }) => <DataCellCurrentPosition employee={row.original.employee} />
	},

	{
		accessorKey: "employee.assumedOffice",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Joined since" />,
		cell: ({ row }) => <DataCellAssumedOffice employee={row.original.employee} />
	},
	{
		accessorKey: "role",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Administrative Role" className="" />,
		cell({ row }) {
			const {
				id,
				team: { organizationId },
				user: { name: userName }
			} = row.original;
			return (
				<DataCellAdministrativeRole
					role={undefined}
					id={id}
					organizationId={organizationId}
					userName={userName}
					organizationSlug={organizationSlug}
				/>
			);
		}
	},
	{
		id: "action",
		header: ({ column }) => <DataTableColumnHeader column={column} title="Action" />,
		cell({ row }) {
			const { id } = row.original;
			const [isPending, startTransition] = useTransition();
			const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
			const url = getNavigationLinkWithPathnameWithoutUpdate(`/users/${id}`);
			return (
				<ButtonGroup>
					<Button variant={"secondary"} onClick={() => startTransition(() => {})} size={"sm"} asChild>
						<Link href={url}>View {isPending ? <Spinner /> : <ArrowUpRightIcon />}</Link>
					</Button>
				</ButtonGroup>
			);
		}
	}
];
