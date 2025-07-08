"use client";

import { EmployeeData } from "@/lib/types";
import { Button, ButtonProps } from "../ui/button";
import { useState } from "react";
import FormAddEditEmployee from "./form-add-edit-employee";
import { useSession } from "@/app/session-provider";
import { Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";
import { useQuery } from "@tanstack/react-query";
import { getAllDepartments } from "./action";
import ErrorContainer from "../query-containers/error-container";
import EmptyContainer from "../query-containers/empty-container";
import FormAddEditStaff from "./form-add-edit-staff";

interface ButtonAddEditStaffProps extends ButtonProps {
  employee?: EmployeeData;
}

export default function ButtonAddEditStaff({
  employee,
  ...props
}: ButtonAddEditStaffProps) {
  const [open, setOpen] = useState(false);
    const { user } = useSession();
    const query = useQuery({
      queryKey:['All departments'],
      queryFn: getAllDepartments,

    })
const isAuthorized =
    !!user && myPrivileges[user.role].includes(Role.MODERATOR);
  if (!isAuthorized) return null;
  const {data,status} = query
  return (
    <>
    {
      status==='pending'?
      <div></div>:
      status==='error'?
      <ErrorContainer query={query} errorMessage="Failed to fetch departments" />
      :status==='success'&& !data.length?
      <EmptyContainer message={''}>

      </EmptyContainer>:
 <Button
        onClick={() => setOpen(true)}
        title={
          employee
            ? `Update ${employee.user.name!.split(" ").pop()}'s information`
            : "Create new staff"
        }
        {...props}
      />
    }
     
      <FormAddEditStaff
        open={open}
        setOpen={setOpen}
        employee={employee}
        departments={data}
      />
    </>
  );
}
