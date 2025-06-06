"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRadioGroup,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoadingButton from "@/components/ui/loading-button";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { DepartmentData } from "@/lib/types";
import {
  Edit3Icon,
  MoreHorizontalIcon,
  MoveUpRightIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import FormAddEditDepartmentalSector from "./(departmental-sector)/form-add-edit-departmental-sector";
import { DeleteDepartmentDialog } from "./button-delete-department";
import FormAddEditDepartment from "./form-add-edit-department";
import { useSession } from "@/app/session-provider";
import { myPrivileges } from "@/lib/enums";
import { Role } from "@/generated/prisma";

interface DropDownMenuDepartmentProps {
  department: DepartmentData;
}
export default function DropDownMenuDepartment({
  department,
}: DropDownMenuDepartmentProps) {
  const { getNavigationLinkWithoutUpdate } = useCustomSearchParams();
  const url = getNavigationLinkWithoutUpdate("/" + department.id);

  const { user } = useSession();
  const isAuthorized =
    !!user && myPrivileges[user.role].includes(Role.MODERATOR);
  const [_, setOpen] = useState(false);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openDeleteDialog, setOpenDeleteDialog] = useState(false);
  const [openCreateDialog, setOpenCreateDialog] = useState(false);
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
                <MoveUpRightIcon /> <span>View department</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setOpen(false);
                setOpenEditDialog(true);
              }}
            >
              <Edit3Icon /> <span>Edit department</span>
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                setOpen(false);
                setOpenDeleteDialog(true);
              }}
              variant="destructive"
            >
              <Trash2Icon /> <span>Delete department</span>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
          </DropdownMenuGroup>
          <DropdownMenuRadioGroup>
            <DropdownMenuLabel>Secondary actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => {
                setOpen(false);
                setOpenCreateDialog(true);
              }}
            >
              <PlusIcon /> <span>Add sector</span>
            </DropdownMenuItem>
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <FormAddEditDepartment
        open={openEditDialog}
        setOpen={setOpenEditDialog}
        departmentToEdit={department}
      />
      <DeleteDepartmentDialog
        open={openDeleteDialog}
        setOpen={setOpenDeleteDialog}
        department={department}
      />
      <FormAddEditDepartmentalSector
        open={openCreateDialog}
        setOpen={setOpenCreateDialog}
        departMentId={department.id}
      />
    </>
  );
}
