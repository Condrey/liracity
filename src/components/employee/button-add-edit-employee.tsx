"use client";

import { EmployeeData } from "@/lib/types";
import { Button, ButtonProps } from "../ui/button";
import { useState } from "react";
import FormAddEditEmployee from "./form-add-edit-employee";

interface ButtonAddEditEmployeeProps extends ButtonProps {
  departmentalSectorId: string;
  employee?: EmployeeData;
}

export default function ButtonAddEditEmployee({
  employee,
  departmentalSectorId,
  ...props
}: ButtonAddEditEmployeeProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        title={
          employee
            ? `Update ${employee.user.name!.split(" ").pop()}'s information`
            : "Create new staff"
        }
        {...props}
      />
      <FormAddEditEmployee
        open={open}
        setOpen={setOpen}
        employee={employee}
        departmentalSectorId={departmentalSectorId}
      />
    </>
  );
}
