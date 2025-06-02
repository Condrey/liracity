"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { DepartmentData } from "@/lib/types";
import { useState } from "react";
import FormAddEditDepartment from "./form-add-edit-department";

interface ButtonAddEditDepartmentProps extends ButtonProps {
  department?: DepartmentData;
  children: React.ReactNode;
}
export default function ButtonAddEditDepartment({
  department,
  children,
  ...props
}: ButtonAddEditDepartmentProps) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        title={
          department
            ? `Update ${department.name} department's value`
            : "Create a new department"
        }
        {...props}
      >
        {children}
      </Button>
      <FormAddEditDepartment open={open} setOpen={setOpen} departmentToEdit={department} />
    </>
  );
}
