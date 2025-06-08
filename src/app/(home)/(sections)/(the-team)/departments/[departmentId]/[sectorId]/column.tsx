'use client'

import { DataTableColumnHeader } from "@/components/data-table/data-table-column-header";
import { EmployeeData } from "@/lib/types"
import { ColumnDef } from "@tanstack/react-table"

export const useSectorEmployeeColumns: ColumnDef<EmployeeData>[]=[
     {
    id: "index",
    header({ column }) {
      return <DataTableColumnHeader column={column} title="#" />;
    },
    cell({ row }) {
      return (
        <span className="text-muted-foreground slashed-zero  proportional-nums ">
          {row.index + 1}
        </span>
      );
    },
  },
]