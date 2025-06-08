"use client";

import { useSession } from "@/app/session-provider";
import { Button, ButtonProps } from "@/components/ui/button";
import { Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";
import { EmployeeData } from "@/lib/types";
import { useState } from "react";
import FormAddEditHeadOfDepartment from "./form-add-edit-head-of-department";

interface ButtonAddEditHeadOfDepartmentProps extends ButtonProps {
  employee?: EmployeeData;
  departmentId: string;
}

export default function ButtonAddEditHeadOfDepartment({
  employee,
  departmentId,
  ...props
}: ButtonAddEditHeadOfDepartmentProps) {
  const { user } = useSession();
  const isAuthorized =
    !!user && myPrivileges[user.role].includes(Role.MODERATOR);
  const [open, setOpen] = useState(false);

  if (!isAuthorized) return null;

  return (
    <>
      <Button onClick={() => setOpen(true)} {...props} />
      <FormAddEditHeadOfDepartment
        departmentId={departmentId}
        employee={employee}
      />
    </>
  );
}
