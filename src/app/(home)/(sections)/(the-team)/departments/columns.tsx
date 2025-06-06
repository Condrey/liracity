"use client";

import { useSession } from "@/app/session-provider";
import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Role } from "@/generated/prisma";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { myPrivileges } from "@/lib/enums";
import { DepartmentData } from "@/lib/types";
import { cn, formatNumber } from "@/lib/utils";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";
import DropDownMenuDepartment from "./drop-down-menu-department";
import ButtonAddEditDepartmentalSector from "./(departmental-sector)/button-add-edit-departmental-sector";
import { PlusIcon } from "lucide-react";

export const useDepartmentsColumns: ColumnDef<DepartmentData>[] = [
  {
    id: "index",
    header({ column }) {
      return <DataTableColumnHeader column={column} title="#" />;
    },
    cell({ row }) {
      return (
        <span className="text-muted-foreground slashed-zero  proportional-nums ">
          {row.index + 1}
        </span>
      );
    },
  },
  {
    accessorKey: "name",
    header({ column }) {
      return <DataTableColumnHeader column={column} title="Department" />;
    },
    cell({ row }) {
      const department = row.original;
      return (
        <div>
          <div>{department.name} </div>
        </div>
      );
    },
  },
  {
    accessorKey: "headOfDepartment.user.name",
    header({ column }) {
      return (
        <DataTableColumnHeader
          className="hidden md:flex"
          column={column}
          title="Head of Department"
        />
      );
    },
    cell({ row }) {
      const headOfDepartment = row.original.headOfDepartment;

      return (
        <div className="hidden md:block">
          {!headOfDepartment ? (
            <Badge variant={"outline"}>No added yet</Badge>
          ) : (
            <div>
              <div>{headOfDepartment.user.name}</div>
              <div>
                {headOfDepartment.assumedOffice}-{headOfDepartment.endedOffice}
              </div>
            </div>
          )}
        </div>
      );
    },
  },
  {
    accessorKey: "_count.departmentalSectors.name",
    header({ column }) {
      return (
        <DataTableColumnHeader
          className="hidden sm:flex"
          column={column}
          title="Department Sectors"
        />
      );
    },
    cell({ row }) {
      const departmentalSectors = row.original.departmentalSectors;
      const numberOfDepartmentalSectors = departmentalSectors.length;
      const {user} = useSession()
      const isAuthorized = !!user && myPrivileges[user.role].includes(Role.MODERATOR)

      return (
        <div className="hidden sm:flex flex-col">
          {numberOfDepartmentalSectors === 0 ? (
            <>
            {
              isAuthorized?<ButtonAddEditDepartmentalSector variant={'outline'} departMentId={row.original.id}>
<PlusIcon/> New sector
              </ButtonAddEditDepartmentalSector>:<Badge variant={"outline"}>Not added yet</Badge>
            }</>
          ) : numberOfDepartmentalSectors === 1 ? (
            <div className="flex gap-1 ">
              <Badge variant={"secondary"} className="w-fit flex flex-wrap">
                {departmentalSectors[0].name}
              </Badge>{" "}
              <span className="text-xs text-muted-foreground italic ">
                only
              </span>
            </div>
          ) : (
            <div className=" flex-wrap inline-flex gap-1 max-w-xs">
              <div>
                {formatNumber(numberOfDepartmentalSectors)} sectors{" "}
                <span className="italic text-muted-foreground text-xs">
                  including
                </span>
              </div>
              <div className="text-muted-foreground inline-flex flex-wrap text-xs  gap-1 ">
                {departmentalSectors.slice(-3).map((sector) => (
                  <Badge key={sector.id} variant={"secondary"}>
                    <span className="break-all text-wrap hyphens-auto">{sector.name}</span>
                  </Badge>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    },
  },

  {
    id: "action",
    header({ column }) {
      return <DataTableColumnHeader column={column} title="Action" />;
    },
    cell({ row }) {
      const { user } = useSession();
      const isAuthorized =
        !!user && myPrivileges[user.role].includes(Role.MODERATOR);
      const { getNavigationLinkWithoutUpdate } = useCustomSearchParams();
      const department = row.original;
      const url = getNavigationLinkWithoutUpdate("/" + department.id);
      return (
        <div className="flex gap-2 items-center">
          {isAuthorized ? (
            <DropDownMenuDepartment department={department} />
          ) : (
            <Link
              href={url}
              className={cn(
                buttonVariants({
                  variant: isAuthorized ? "ghost" : "default",
                  size: isAuthorized ? "icon" : "sm",
                })
              )}
            >
              <span                   className='sm:after:content-["_more"]'
>View</span>
            </Link>
          )}
        </div>
      );
    },
  },
];
