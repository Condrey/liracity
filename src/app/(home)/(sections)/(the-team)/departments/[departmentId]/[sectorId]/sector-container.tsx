"use client";

import ButtonAddEditDepartmentalSector from "@/components/departmental-sector/button-add-edit-departmental-sector";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { CardDescription, CardTitle } from "@/components/ui/card";
import { DepartmentalSectorData } from "@/lib/types";
import { Edit3Icon } from "lucide-react";
import { Fragment } from "react";
import SectorSideBar from "./sector-side-bar";
import ListOfSectorEmployees from "./list-of-sector-employees";

interface SectorContainerProps {
  departmentalSector: DepartmentalSectorData;
}
export default function SectorContainer({
  departmentalSector,
}: SectorContainerProps) {
  const { name, description, } = departmentalSector;
  return (
    <div className="space-y-6 px-3">
      {/* optionally show department details on small screens  */}
<SectorSideBar
sector={departmentalSector}
 className="lg:hidden hidden md:flex flex-col w-full "/>
      {/* Sector information  */}
      <div>
        <Fragment>
          <CardTitle className="uppercase tracking-tight font-bold text-lg sm:text-xl">
            <span>{name} sector</span>
            <ButtonAddEditDepartmentalSector
              departMentId={departmentalSector.departMentId!}
              departmentalSector={departmentalSector}
              size="icon"
              variant={"outline"}
              className="ml-2"
            >
              <Edit3Icon />
            </ButtonAddEditDepartmentalSector>
            
          </CardTitle>
          {description && (
            <CardDescription>
              <TipTapViewer
                content={description}
                className="max-w-prose text-justify hyphens-auto"
              />
            </CardDescription>
          )}
        </Fragment>
      </div>

      {/* show the employees  */}<ListOfSectorEmployees sector={departmentalSector}/>
    </div>
  );
}
