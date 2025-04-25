'use client'

import { DepartmentalSectorData } from "@/lib/types"
import { useQuery } from "@tanstack/react-query"

interface DepartmentalSectorContainerProps{
    departmentalSector: DepartmentalSectorData
}
export default function DepartmentalSectorContainer({departmentalSector:sector}:DepartmentalSectorContainerProps){

    return <div>
        <span className="">{sector.name}</span>
    </div>
}