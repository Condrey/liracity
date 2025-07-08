'use client'

import { EmployeeData } from "@/lib/types"
import { useQuery } from "@tanstack/react-query"
import { getAllStaffs } from "./actions"
import ErrorContainer from "@/components/query-containers/error-container"
import EmptyContainer from "@/components/query-containers/empty-container"
import { DataTable } from "@/components/data-table/data-table"

interface StaffListProps{
    staffs: EmployeeData[]
}
export default function StaffList({staffs}:StaffListProps){
    const query = useQuery({
        queryKey:['staffs'],
        queryFn: getAllStaffs,
        initialData: staffs,
        refetchOnWindowFocus: false,
    })

    const {status , data} = query
    return <div>
        {
            status==='error'?
            <ErrorContainer errorMessage="Failed to fetch all staffs, please retry" query={query}/>
            :
            status === 'success' && !data.length ?
            <EmptyContainer message={'There are no staffs in the database yet.'}>

            </EmptyContainer>
            : <DataTable/>
        }
    </div>
}