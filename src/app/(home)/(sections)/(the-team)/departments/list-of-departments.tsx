"use client";

import { DataTable } from "@/components/data-table/data-table";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { DepartmentData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { getAllDepartmentList } from "./action";
import ButtonAddEditDepartment from "./button-add-edit-department";
import { useDepartmentsColumns } from "./columns";
import DepartmentContainer from "./department-container";
import { PlusIcon } from "lucide-react";
import { useSession } from "@/app/session-provider";
import { myPrivileges } from "@/lib/enums";
import { Role } from "@/generated/prisma";

interface ListOfDepartmentsProps {
  departments: DepartmentData[];
}
export default function ListOfDepartments({
  departments,
}: ListOfDepartmentsProps) {

  const {user,} = useSession()
const isAuthorized = !!user&& myPrivileges[user.role].includes(Role.MODERATOR)

  const query = useQuery({
    queryKey: ["department", "list"],
    queryFn: getAllDepartmentList,
    initialData: departments,
    refetchOnWindowFocus: false,
  });
  const { data, status } = query;
  return (
    <div>
      {status === "error" ? (
        <ErrorContainer
          errorMessage="An error occurred while fetching departments. Please try again!"
          query={query}
        />
      ) : status === "success" && !data.length ? (
        <EmptyContainer
          message={"There are no departments in the database yet. Please add"}
        >
          <ButtonAddEditDepartment variant={"secondary"}>
            Add department
          </ButtonAddEditDepartment>
        </EmptyContainer>
      ) : (
        <div className="space-y-4">
          <DataTable
            data={data}
            columns={useDepartmentsColumns()}
            filterColumn={{ id: "name", label: "department" }}
            className='w-full'
          >

           {isAuthorized&& <ButtonAddEditDepartment size='sm' variant={'default'}>
              <PlusIcon/> New
            </ButtonAddEditDepartment>}
          </DataTable>
        
        </div>
      )}
    </div>
  );
}
