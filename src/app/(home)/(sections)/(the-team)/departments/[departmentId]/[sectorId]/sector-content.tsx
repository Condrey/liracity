"use client";

import ErrorContainer from "@/components/query-containers/error-container";
import { DepartmentalSectorData } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";
import { notFound } from "next/navigation";
import { getDepartmentalSectorById } from "@/components/departmental-sector/action";
import SectorContainer from "./sector-container";
import SectorSideBar from "./sector-side-bar";

interface SectorContentProps {
  sector: DepartmentalSectorData;
}

export default function SectorContent({ sector }: SectorContentProps) {
  const query = useQuery({
    queryKey: ["sector", sector.id],
    queryFn: async () => getDepartmentalSectorById(sector.id),
    refetchOnWindowFocus: false,
    initialData: sector,
  });
  const { data, status } = query;
  return (
    <div>
      {status === "error" ? (
        <ErrorContainer
          query={query}
          errorMessage="Failed to get departmental sector, please try again!"
        />
      ) : status === "success" && !data ? (
        notFound()
      ) : (
        <div className="flex gap-3 justify-between w-full *:flex-1 *:h-fit ">
          <SectorContainer departmentalSector={data!} />
          <SectorSideBar sector={data!} />
        </div>
      )}
    </div>
  );
}
