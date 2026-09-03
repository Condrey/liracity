"use client";

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { ButtonGroup } from "@/components/ui/button-group";
import { PositionData } from "@/lib/types";
import { ColumnDef } from "@tanstack/react-table";
import { Edit2Icon, Trash2Icon } from "lucide-react";
import ButtonAddEditPosition from "./button-add-edit-position";
import ButtonDeletePosition from "./button-delete-position";
import PositionOverviewContainer from "./poisiton-overview-container";

export const usePositionColumns: ColumnDef<PositionData>[] = [
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
		accessorKey: "jobTitle",
		header({ column }) {
			return <DataTableColumnHeader column={column} title="Job Title" />;
		},
		cell({ row }) {
			const position = row.original;
			const { jobTitle, salaryScale, departmentalSection } = position;
			return (
				<div>
					<PositionOverviewContainer position={position} className="h-[60vh] w-full max-w-3xl">
						<span className="underline decoration-dotted underline-offset-2">{jobTitle}</span>
					</PositionOverviewContainer>
					<div className="text-xs text-muted-foreground">
						<span>{salaryScale}</span> {departmentalSection && <Badge>{`${departmentalSection.stationType}`}</Badge>}
					</div>
				</div>
			);
		}
	},

	{
		accessorKey: "jobPurpose",
		header({ column }) {
			return <DataTableColumnHeader column={column} title="Job Purpose" className="max-w-2xs" />;
		},
		cell({ row }) {
			return <p className="line-clamp-2 max-w-2xs text-sm text-ellipsis">{row.original.jobPurpose}</p>;
		}
	},
	{
		accessorKey: "reportsTo",
		header({ column }) {
			return <DataTableColumnHeader column={column} title="Staff Reports to" />;
		},
		cell({ row }) {
			const reportsTo = row.original.reportsTo;
			return (
				<div>
					{!reportsTo ? (
						<Badge variant={"destructive"}>No supervisor</Badge>
					) : (
						<>
							<div>{reportsTo.jobTitle}</div>
							<div className="text-xs text-muted-foreground">{reportsTo.salaryScale}</div>
						</>
					)}
				</div>
			);
		}
	},
	{
		accessorKey: "responsibleFor",
		header({ column }) {
			return <DataTableColumnHeader column={column} title="Supervises (staffs)" />;
		},
		cell({ row }) {
			const responsibleFor = row.original.responsibleFor;
			const MAX_LENGTH = 1;
			return (
				<div>
					{!responsibleFor.length ? (
						<Badge variant={"destructive"}>No supervised staff</Badge>
					) : (
						<div className="flex flex-wrap items-center gap-2">
							{responsibleFor.slice(0, MAX_LENGTH).map((staff, index) => (
								<Badge key={index} variant={"secondary"} className="line-clamp-1 text-ellipsis">
									{staff.jobTitle}
								</Badge>
							))}
							{responsibleFor.length > MAX_LENGTH && (
								<Badge variant={"secondary"} className="line-clamp-1 text-ellipsis">
									+{responsibleFor.length - MAX_LENGTH} staffs
								</Badge>
							)}
						</div>
					)}
				</div>
			);
		}
	},
	{
		id: "action",
		header({ column }) {
			return <DataTableColumnHeader column={column} title="Action" />;
		},
		cell({ row }) {
			const position = row.original;
			return (
				<ButtonGroup>
					<ButtonAddEditPosition position={position} variant={"outline"} size="sm">
						<Edit2Icon />
					</ButtonAddEditPosition>
					<ButtonDeletePosition position={position} variant={"destructive"} size="sm">
						<Trash2Icon />
					</ButtonDeletePosition>
				</ButtonGroup>
			);
		}
	}
];
