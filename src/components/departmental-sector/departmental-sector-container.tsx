"use client";

import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import LoadingButton from "@/components/ui/loading-button";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { DepartmentalSectorData } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import Link from "next/link";
import { useTransition } from "react";
import DropDownMenuDepartmentalSector from "./drop-down-menu-departmental-sector";

interface DepartmentalSectorContainerProps {
  departmentalSector: DepartmentalSectorData;
}
export default function DepartmentalSectorContainer({
  departmentalSector: sector,
}: DepartmentalSectorContainerProps) {
  const numberOfStaffs = sector._count.employees;
  const [isPending, startTransition] = useTransition();
  const { getNavigationLinkWithoutUpdate } = useCustomSearchParams();
  const href = getNavigationLinkWithoutUpdate(`/${sector.id}`);
  // include avatar of at least 3 available staffs
  return (
    <li className="font-semibold border p-2 rounded-md list-[lower-roman] ">
      <span className='capitalize w-full tracking-tight sm:after:content-["_sector"]'>
        {sector.name}
      </span>
      <DropDownMenuDepartmentalSector
        sector={sector}
        className="w-fit min-w-fit shrink-0 flex-none flex  float-right"
      />
      <span className="block ps-4 font-normal text-sm capitalize">
        {numberOfStaffs === 0
          ? "No staff added yet"
          : `${formatNumber(numberOfStaffs)} staff${
              numberOfStaffs === 1 ? "" : "s"
            }`}
      </span>
      <TipTapViewer
        className="block ps-4 text-justify hyphens-auto font-normal  text-sm  line-clamp-3 text-ellipsis text-muted-foreground "
        content={sector.description}
      />
      <LoadingButton
        onClick={() => startTransition(() => {})}
        loading={isPending}
        className="w-full max-w-fit ms-auto my-2"
        asChild
      >
        <Link href={href}>View sector</Link>
      </LoadingButton>
    </li>
  );
}
