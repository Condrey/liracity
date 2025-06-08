"use client";

import { useSession } from "@/app/session-provider";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoadingButton from "@/components/ui/loading-button";
import { Role } from "@/generated/prisma";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { myPrivileges } from "@/lib/enums";
import { EmployeeData } from "@/lib/types";
import {
  Edit3Icon,
  MoreHorizontalIcon,
  MoveUpRightIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import FormAddEditEmployee from "./form-add-edit-employee";
import { DeleteEmployeeDialog } from "./button-delete-employee";

interface DropDownMenuEmployeeProps {
  employee: EmployeeData;
}
export default function DropDownMenuEmployee({
  employee,
}: DropDownMenuEmployeeProps) {
  const { getNavigationLinkWithoutUpdate } = useCustomSearchParams();
  const url = getNavigationLinkWithoutUpdate("/" + employee.id);

  const { user } = useSession();
  const isAuthorized =
    !!user && myPrivileges[user.role].includes(Role.MODERATOR);
  const [_, setOpen] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [isPending, startTransition] = useTransition();

  return (
    <>
      <DropdownMenu onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          {isAuthorized && (
            <LoadingButton loading={isPending} size={"icon"} variant={"ghost"}>
              <MoreHorizontalIcon />
              <span className="sr-only">View more options</span>
            </LoadingButton>
          )}
        </DropdownMenuTrigger>

        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              asChild
              onClick={() =>
                startTransition(() => {
                  setOpen(false);
                })
              }
            >
              <Link href={url}>
                <MoveUpRightIcon /> <span>View employee</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setOpen(false);
                setOpenEditDialog(true);
              }}
            >
              <Edit3Icon /> <span>Edit employee</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setOpen(false);
                setOpenDeleteDialog(true);
              }}
              variant="destructive"
            >
              <Trash2Icon /> <span>Delete employee</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuGroup>
          
        </DropdownMenuContent>
      </DropdownMenu>
      <FormAddEditEmployee
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        employee={employee} departmentalSectorId={employee.departMentalSectorId!}
      />
      <DeleteEmployeeDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        employee={employee}
      />
     
    </>
  );
}
