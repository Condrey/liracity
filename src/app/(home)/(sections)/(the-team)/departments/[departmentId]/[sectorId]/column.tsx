"use client";

import { useSession } from "@/app/session-provider";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import DropDownMenuEmployee from "@/components/employee/drop-down-menu-employee";
import { Badge } from "@/components/ui/badge";
import LoadingButton from "@/components/ui/loading-button";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import UserAvatar from "@/components/ui/user-avatar";
import { Role } from "@/generated/prisma/enums";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { myPrivileges } from "@/lib/enums";
import { EmployeeData } from "@/lib/types";
import { getTitle } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import { DotIcon, VerifiedIcon } from "lucide-react";
import Link from "next/link";
import { useTransition } from "react";
import { toast } from "sonner";

export const useSectorEmployeeColumns: ColumnDef<EmployeeData>[] = [
	{
		id: "index",
		header({ column }) {
			return <DataTableColumnHeader column={column} title="#" />;
		},
		cell({ row }) {
			return <span className="text-muted-foreground proportional-nums slashed-zero">{row.index + 1}</span>;
		}
	},
	{
		accessorKey: "user.name",
		header({ column }) {
			return <DataTableColumnHeader column={column} title="Employee bio-information" />;
		},
		cell({ row }) {
			const employee = row.original;
			const user = employee.user;
			const currentYear = new Date().getFullYear();
			return (
				<div className="flex items-center gap-2">
					<UserAvatar image={user.image} className="hidden sm:flex" />
					<div className="flex flex-col justify-center">
						<div>
							<Badge
								className=""
								variant={
									(employee.endedOffice || 0) < currentYear && employee.assumedOffice !== currentYear
										? "destructive"
										: "success"
								}
							>
								{getTitle(employee.position?.jobTitle!)}
							</Badge>{" "}
							<span>{user.name}</span>{" "}
							{user.isVerified && <VerifiedIcon className="inline size-4 fill-success text-success-foreground" />}
						</div>
						{user.telephone && user.email ? (
							<div className="flex items-center text-xs text-muted-foreground">
								<Link href={`mailto:${user.email}`} className="underline hover:text-primary">
									{user.email}
								</Link>
								<DotIcon />
								<Link href={`tel:${user.telephone}`} className="underline hover:text-primary">
									{user.telephone}
								</Link>
							</div>
						) : (
							<em className="text-xs text-muted-foreground">--Missing contact--</em>
						)}
					</div>
				</div>
			);
		}
	},
	{
		accessorKey: "position",
		header({ column }) {
			return <DataTableColumnHeader column={column} title="Employee Staff Information" className="hidden sm:flex" />;
		},
		cell({ row }) {
			const { position, assumedOffice, endedOffice, ippsNumber } = row.original;
			const { user } = useSession();
			const isAuthorized = !!user && myPrivileges[user.role as Role].includes(Role.MODERATOR);
			return (
				<div className="hidden flex-col sm:flex">
					<div>{position?.jobTitle}</div>
					<div className="text-xs text-muted-foreground">
						{assumedOffice} - {endedOffice || "Now"}
					</div>
					{isAuthorized && (
						<div className="text-xs text-muted-foreground">
							IPPS NUMBER:{" "}
							<strong>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<button
												onClick={() => {
													navigator.clipboard.writeText(ippsNumber);
													toast.success("Copied IPPS number to clipboard");
												}}
												className="text-card-foreground proportional-nums slashed-zero underline hover:text-primary"
											>
												{ippsNumber}
											</button>
										</TooltipTrigger>
										<TooltipContent>
											<p>Click to copy staff IPPS number</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</strong>
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
			const { user } = useSession();
			const [isPending, startTransition] = useTransition();
			const isAuthorized = !!user && myPrivileges[user.role as Role].includes(Role.MODERATOR);
			const { getNavigationLinkWithoutUpdate } = useCustomSearchParams();
			const employee = row.original;
			const url = getNavigationLinkWithoutUpdate("/" + employee.id);
			return (
				<div className="flex items-center gap-2">
					{isAuthorized ? (
						<DropDownMenuEmployee employee={employee} />
					) : (
						<LoadingButton
							onClick={() => startTransition(() => {})}
							loading={isPending}
							variant={isAuthorized ? "ghost" : "default"}
							size={isAuthorized ? "icon" : "sm"}
							asChild
						>
							<Link href={url} target="_blank" rel="noopener noreferrer">
								<span className='sm:after:content-["_more"]'>View</span>
							</Link>
						</LoadingButton>
					)}
				</div>
			);
		}
	}
];
