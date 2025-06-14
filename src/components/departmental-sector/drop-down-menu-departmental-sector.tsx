"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import LoadingButton from "@/components/ui/loading-button";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { DepartmentalSectorData } from "@/lib/types";
import {
  Edit3Icon,
  MoreVertical,
  MoveUpRightIcon,
  PlusIcon,
  Trash2Icon,
} from "lucide-react";
import Link from "next/link";
import { useState, useTransition } from "react";
import FormAddEditEmployee from "../employee/form-add-edit-employee";
import { DeleteDepartmentalSectorDialog } from "./button-delete-departmental-sector";
import FormAddEditDepartmentalSector from "./form-add-edit-departmental-sector";
import { useSession } from "@/app/session-provider";
import { myPrivileges } from "@/lib/enums";
import { Role } from "@/generated/prisma";

interface DropDownMenuDepartmentalSectorProps {
  sector: DepartmentalSectorData;
  className?: string;
}

export default function DropDownMenuDepartmentalSector({
  sector,
  className,
}: DropDownMenuDepartmentalSectorProps) {
  const [isPending, startTransition] = useTransition();
  const [openCreate, setOpenCreate] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openDelete, setOpenDelete] = useState(false);
  const { getNavigationLinkWithoutUpdate } = useCustomSearchParams();
  const {user} = useSession()
  const isAuthorized = !!user && myPrivileges[user.role].includes(Role.MODERATOR)
  const href = getNavigationLinkWithoutUpdate(`/${sector.id}`);
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className={className} asChild>
         {isAuthorized&& <LoadingButton loading={isPending} size={"icon"} variant={"ghost"}>
            <MoreVertical />
          </LoadingButton>}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Action</DropdownMenuLabel>
            <DropdownMenuItem asChild onClick={() => startTransition(() => {})}>
              <Link href={href}>
                <MoveUpRightIcon /> View sector
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setOpenEdit(true)}>
              <Edit3Icon /> Edit sector
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setOpenDelete(true)}
              variant="destructive"
            >
              <Trash2Icon /> Delete sector
            </DropdownMenuItem>
          </DropdownMenuGroup>
          <DropdownMenuGroup>
            <DropdownMenuLabel>Secondary actions</DropdownMenuLabel>
            <DropdownMenuItem onClick={() => setOpenCreate(true)}>
              <PlusIcon /> Add employee
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
      <FormAddEditDepartmentalSector
        open={openEdit}
        setOpen={setOpenEdit}
        departMentId={sector.departMentId!}
        departmentalSectorToEdit={sector}
      />
      <DeleteDepartmentalSectorDialog
        open={openDelete}
        setOpen={setOpenDelete}
        departmentalSector={sector}
      />
      <FormAddEditEmployee
        open={openCreate}
        setOpen={setOpenCreate}
        departmentalSectorId={sector.id}
      />
    </>
  );
}
