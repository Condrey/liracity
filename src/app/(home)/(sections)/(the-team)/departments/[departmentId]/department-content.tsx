"use client";

import ErrorContainer from "@/components/query-containers/error-container";
import { DepartmentData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { getDepartmentById } from "../../../../../../components/department/action";
import HeadOfDepartmentContainer from "../../../../../../components/head-of-department/head-of-department-container";
import DepartmentContainer from "./department-container";

interface DepartmentContentProps {
  department: DepartmentData;
}

export default function DepartmentContent({
  department,
}: DepartmentContentProps) {
  const query = useQuery({
    queryKey: ["department", department.id],
    queryFn: async () => getDepartmentById(department.id),
    initialData: department,
    refetchOnWindowFocus: false,
  });

  const { data, status } = query;
  return (
    <div>
      {status === "error" ? (
        <ErrorContainer
          errorMessage="Failed to fetch department, please try again"
          query={query}
        />
      ) : status === "success" && !data ? (
        notFound()
      ) : (
        <div className="flex gap-3 justify-between w-full *:flex-1 *:h-fit ">
          <DepartmentContainer department={data!} />
          <HeadOfDepartmentContainer
            employee={department.headOfDepartment}
            departmentId={data?.id!}
            className="lg:flex lg:flex-col hidden"
          />
        </div>
      )}
    </div>
  );
}
