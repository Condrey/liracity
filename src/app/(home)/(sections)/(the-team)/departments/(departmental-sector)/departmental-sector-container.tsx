"use client";

import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { DepartmentalSectorData } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import { useQuery } from "@tanstack/react-query";

interface DepartmentalSectorContainerProps {
  departmentalSector: DepartmentalSectorData;
}
export default function DepartmentalSectorContainer({
  departmentalSector: sector,
}: DepartmentalSectorContainerProps) {
  const numberOfStaffs = sector._count.employees;

  // include avatar of at least 3 available staffs
  return (
    <li className="font-semibold ">
      <span className='uppercase tracking-tight sm:after:content-["_sector"]'>
        {sector.name}
      </span>
      <span className="block ps-4 font-normal text-sm capitalize">
        {numberOfStaffs === 0
          ? "No staff added yet"
          : `${formatNumber(numberOfStaffs)} staff${numberOfStaffs === 1 ? "" : "s"}`}
      </span>
      <TipTapViewer
        className="block ps-4 font-normal   line-clamp-3 text-ellipsis text-muted-foreground tracking-wide leading-tight"
        content={sector.description}
      ></TipTapViewer>
    </li>
  );
}
