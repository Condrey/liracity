"use client";

import { useSession } from "@/app/session-provider";
import EmptyContainer from "@/components/query-containers/empty-container";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import UserAvatar from "@/components/ui/user-avatar";
import { EmployeeData } from "@/lib/types";
import { DotIcon, Edit3Icon, MailIcon, PhoneCallIcon } from "lucide-react";
import Link from "next/link";
import ButtonAddEditHeadOfDepartment from "./button-add-edit-head-of-department";
import { cn } from "@/lib/utils";

interface HeadOfDepartmentContainerProps {
  employee: EmployeeData | null;
  departmentId: string;
  className?: string;
}

export default function HeadOfDepartmentContainer({
  employee,
  departmentId,
  className,
}: HeadOfDepartmentContainerProps) {
  if (!employee)
    return (
      <EmptyContainer
        className={cn(
          "border bg-card p-2 rounded-md max-w-sm w-full",
          className,
        )}
        message={
          "This department has no head of department added in the system."
        }
      >
        <ButtonAddEditHeadOfDepartment
          departmentId={departmentId}
          variant={"secondary"}
          size={"sm"}
        >
          Assign HOD
        </ButtonAddEditHeadOfDepartment>
      </EmptyContainer>
    );
  const { avatarUrl, email, name, telephone, id } = employee.user;
  const { user: currentUser } = useSession();
  return (
    <Card className={cn("max-w-sm w-full", className)}>
      <div>
        <UserAvatar
          avatarUrl={avatarUrl}
          size={150}
          className="w-full max-w-[150px] mx-auto"
        />
        <ButtonAddEditHeadOfDepartment
          departmentId={departmentId}
          employee={employee}
          variant={"secondary"}
          size={"icon"}
          className="float-right"
        >
          <Edit3Icon />
        </ButtonAddEditHeadOfDepartment>
      </div>
      <CardHeader>
        <CardTitle>
          {name}{" "}
          {currentUser?.id === id && (
            <Badge className="inline">{employee.ippsNumber}</Badge>
          )}
        </CardTitle>
        <div className="flex ">
          <MailIcon />
          <Link href={`mailto:${email}`} className="underline">
            {email}
          </Link>
          <DotIcon />
          <PhoneCallIcon />
          <Link href={`tel:${telephone}`} className="underline">
            {telephone}
          </Link>
        </div>
        <div>
          {employee.position} <DotIcon /> {employee.assumedOffice} -{" "}
          {employee.endedOffice}
        </div>
      </CardHeader>
      <CardContent>
        <p>{employee.shortMessageToPublic}</p>
      </CardContent>
    </Card>
  );
}
