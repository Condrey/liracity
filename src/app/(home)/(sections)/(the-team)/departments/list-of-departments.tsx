"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import { DepartmentData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { getAllDepartmentList } from "./action";
import ButtonAddEditDepartment from "./button-add-department";
import DepartmentContainer from "./department-container";

interface ListOfDepartmentsProps {
  departments: DepartmentData[];
}
export default function ListOfDepartments({
  departments,
}: ListOfDepartmentsProps) {
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
          {data.map((department, index, array) => (
            <DepartmentContainer
              key={department.id}
              department={department}
              numbering={`${index + 1} of ${array.length}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
