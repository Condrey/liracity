/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import DataCellAssumedOffice from "@/components/feature/employee/data-cell-assumed-office";
import DataCellCurrentPosition from "@/components/feature/employee/data-cell-current-position";
import DataCellAdministrativeRole from "@/components/feature/user/data-cell-administrative-role";
import DataCellUser from "@/components/feature/user/data-cell-user";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Spinner } from "@/components/ui/spinner";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { MemberData } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { ArrowUpRightIcon, TrashIcon } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import DataCellOrganization from "../../data-cell-organization";
import ButtonRemoveMember from "./button-remove-teammember";

export const useMembersColumns = (organizationSlug: string): ColumnDef<MemberData>[] => [
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
				organization: { name: organizationName }
			} = row.original;

			return <DataCellOrganization organization={organizationName} userRole={userRole} team={undefined} />;
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
				role,
				id,
				organizationId,
				user: { name: userName }
			} = row.original;
			return (
				<DataCellAdministrativeRole
					role={role}
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
					<ButtonRemoveMember member={row.original} variant={"destructive"} size={"sm"}>
						<TrashIcon />
						Remove
					</ButtonRemoveMember>
					<Button variant={"secondary"} onClick={() => startTransition(() => {})} size={"sm"} asChild>
						<Link href={url}>View {isPending ? <Spinner /> : <ArrowUpRightIcon />}</Link>
					</Button>
				</ButtonGroup>
			);
		}
	}
];
