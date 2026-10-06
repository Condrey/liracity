"use client";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { ButtonGroup } from "@/components/ui/button-group";
import { ColumnDef } from "@tanstack/react-table";
import { Edit2Icon, Trash2Icon } from "lucide-react";

import { IggDeclaration, Role } from "@/generated/prisma/client";
import { ButtonAddEditIGGDeclaration } from "./button-add-edit-iggDeclaration";
import ButtonDeleteIggDeclaration from "./button-delete-iggDeclaration";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { cn, obscureString } from "@/lib/utils";

export const useIggDeclarationColumns = (): ColumnDef<IggDeclaration>[] => {
	const { user } = useSession();
	const isAuthorized = false;
	// myPrivileges[(user?.role as Role) || Role.USER].includes("HOS");

	return [
		{
			id: "index",
			header({ column }) {
				return <DataTableColumnHeader column={column} title="S/N" />;
			},
			cell({ row }) {
				return <span>{row.index + 1}</span>;
			}
		},
		{
			accessorKey: "name",
			header({ column }) {
				return <DataTableColumnHeader column={column} title="Full name" />;
			},
			cell({ row }) {
				const iggDeclaration = row.original;
				const { title, name } = iggDeclaration;
				return (
					<div>
						<div className="">{name}</div>
						<div className="text-xs text-muted-foreground">{title} </div>
					</div>
				);
			}
		},

		{
			accessorKey: "email",
			header({ column }) {
				return <DataTableColumnHeader column={column} title="Email" />;
			},
			cell({ row }) {
				const iggDeclaration = row.original;
				const { email, nin } = iggDeclaration;
				return (
					<div>
						<div className={""}>{email}</div>
						<div className={cn("text-xs text-muted-foreground")}>
							{isAuthorized ? nin : obscureString(nin, 2, 2, "*")}
						</div>
					</div>
				);
			}
		},
		{
			accessorKey: "phoneNumber",
			header({ column }) {
				return <DataTableColumnHeader column={column} title="Phone Number" />;
			},
			cell({ row }) {
				const iggDeclaration = row.original;
				const { phoneNumber } = iggDeclaration;
				return <div>{phoneNumber}</div>;
			}
		},

		{
			id: "action",
			header({ column }) {
				return <DataTableColumnHeader column={column} title="Action" />;
			},
			cell({ row }) {
				const iggDeclaration = row.original;
				return (
					<ButtonGroup>
						<ButtonAddEditIGGDeclaration iggDeclarationToEdit={iggDeclaration} variant={"outline"} size="sm">
							<Edit2Icon /> Edit
						</ButtonAddEditIGGDeclaration>
						<ButtonDeleteIggDeclaration iggDeclaration={iggDeclaration} variant={"destructive"} size="sm">
							<Trash2Icon /> Delete
						</ButtonDeleteIggDeclaration>
					</ButtonGroup>
				);
			}
		}
	];
};
