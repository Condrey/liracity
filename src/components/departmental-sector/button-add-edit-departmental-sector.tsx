"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { DepartmentalSectorData } from "@/lib/types";
import { useState } from "react";
import FormAddEditDepartmentalSector from "./form-add-edit-departmental-sector";
import { useSession } from "@/app/session-provider";
import { Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";

// TODO: work on union of this for conditional props
// Use https://github.com/codinginflow/nextjs-15-wix-store/blob/Final-Project/src/components/WixImage.tsx
interface ButtonAddEditDepartmentalSectorProps extends ButtonProps {
  departmentalSector?: DepartmentalSectorData;
  departMentId: string;
  children: React.ReactNode;
}

export default function ButtonAddEditDepartmentalSector({
  departmentalSector,
  departMentId,
  variant,
  ...props
}: ButtonAddEditDepartmentalSectorProps) {
  const [open, setOpen] = useState(false);
 const {user} = useSession()
  const isAuthorized = !!user && myPrivileges[user.role].includes(Role.MODERATOR)
  return (
    <>
    {isAuthorized&&  <Button
        title={
          departmentalSector
            ? `Update ${departmentalSector.name}'s content`
            : "Create a new departmental sector"
        }
        variant={variant ?? "ghost"}
        onClick={() => setOpen(true)}
        {...props}
      />}
      <FormAddEditDepartmentalSector
        open={open}
        setOpen={setOpen}
        departMentId={departMentId}
        departmentalSectorToEdit={departmentalSector}
      />
    </>
  );
}
