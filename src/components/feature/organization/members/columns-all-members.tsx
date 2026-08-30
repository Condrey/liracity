/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { MemberData } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import DataCellAssumedOffice from "../../employee/data-cell-assumed-office";
import DataCellCurrentPosition from "../../employee/data-cell-current-position";
import DataCellUser from "../../user/data-cell-user";
import DataCellOrganization from "../data-cell-organization";
import { useTransition } from "react";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { ButtonGroup } from "@/components/ui/button-group";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Spinner } from "@/components/ui/spinner";
import { ArrowUpRightIcon } from "lucide-react";

export const useAllMembersColumns = (organizationSlug: string): ColumnDef<MemberData>[] => [
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
				userId,
				user: { role: userRole },
				organization: { name: organizationName, teams }
			} = row.original;
			const sections = teams
				.filter((t) => t.teammembers.some((m) => m.userId === userId))
				.map((t) => t.name)
				.join(", ");
			return <DataCellOrganization organization={organizationName} userRole={userRole} team={sections} />;
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
