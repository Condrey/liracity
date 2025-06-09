"use client";

import { useSession } from "@/app/session-provider";
import { DataTable } from "@/components/data-table/data-table";
import ButtonAddEditEmployee from "@/components/employee/button-add-edit-employee";
import EmptyContainer from "@/components/query-containers/empty-container";
import { DepartmentalSectorData } from "@/lib/types";
import { PlusIcon } from "lucide-react";
import { useSectorEmployeeColumns } from "./column";

interface ListOfSectorEmployeesProps {
  sector: DepartmentalSectorData;
}

export default function ListOfSectorEmployees({
  sector,
}: ListOfSectorEmployeesProps) {
  const employees = sector.employees;
  
  return (
    <div>
      {!employees.length ? (
        <EmptyContainer
          message={`There are no staffs added to ${sector.name} sector yet.`}
        >
          <ButtonAddEditEmployee
            departmentalSectorId={sector.id}
            variant={"secondary"}
          >
            Create new one
          </ButtonAddEditEmployee>
        </EmptyContainer>
      ) : (

        <DataTable data={employees} columns={useSectorEmployeeColumns}
        filterColumn={{id:'user_name',label:'name'}}
         className="w-full shadow-none">
          <ButtonAddEditEmployee
            departmentalSectorId={sector.id}
            size="sm"
            variant={"outline"}
            className='ml-2 sm:after:content-["_new"]'
          >
            <PlusIcon />
          </ButtonAddEditEmployee>
        </DataTable>
      )}
    </div>
  );
}
