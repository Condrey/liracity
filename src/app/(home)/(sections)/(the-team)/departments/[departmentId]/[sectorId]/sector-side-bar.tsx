"use client";

import ButtonAddEditDepartment from "@/components/department/button-add-edit-department";
import HeadOfDepartmentContainer from "@/components/head-of-department/head-of-department-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { DepartmentalSectorData, DepartmentData } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Edit3Icon } from "lucide-react";

interface SectorSideBarProps {
  sector: DepartmentalSectorData;
  className?: string;
}

export default function SectorSideBar({
  sector,
  className,
}: SectorSideBarProps) {
  return (
    <div
      className={cn(
        "h-fit w-full lg:max-w-sm space-y-6  hidden lg:flex flex-col",
        className
      )}
    >
      {/* about the department  */}
      <Card className="lg:p-3 lg:border   w-full ">
        <CardHeader>
          <div className="flex gap-2">
            <CardTitle className=' capitalize sm:after:content-["_department"]'>
              {sector.departMent?.name}
            </CardTitle>
            <ButtonAddEditDepartment
              department={sector.departMent! as DepartmentData}
              variant={"outline"}
              size={"icon"}
            >
              <Edit3Icon />
            </ButtonAddEditDepartment>
          </div>
          <CardDescription className="">
            <TipTapViewer
              content={sector.departMent?.about}
              className="text-justify max-w-prose   italic hyphens-auto"
            />
          </CardDescription>
        </CardHeader>
      </Card>
      {/* about the head of department  */}
      <HeadOfDepartmentContainer
        departmentId={sector.departMentId!}
        employee={sector.departMent?.headOfDepartment!}
        className="hidden lg:flex flex-col"
      />
    </div>
  );
}
