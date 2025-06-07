"use client";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DepartmentData } from "@/lib/types";
import { MoveRightIcon, PlusIcon } from "lucide-react";
import { Fragment } from "react";
import ButtonAddEditDepartmentalSector from "./(departmental-sector)/button-add-edit-departmental-sector";
import ListOfDepartmentalSectors from "./(departmental-sector)/list-of-departmental-sectors";
import { formatNumber } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

interface DepartmentContainerProps {
  department: DepartmentData;
  numbering: string | undefined;
}
export default function DepartmentContainer({
  department,
  numbering,
}: DepartmentContainerProps) {
  const { id, name, about, headOfDepartment, departmentalSectors, _count } =
    department;
  return (
    <Card>
      <CardHeader>
        <Fragment>
          <CardTitle className="capitalize text-lg sm:text-xl">
            {!!numbering && (
              <span className="text-muted-foreground italic lowercase ">
                {numbering}.{" "}
              </span>
            )}{" "}
            {name} department
          </CardTitle>
          {about && (
            <CardDescription>
              <TipTapViewer content={about} />
            </CardDescription>
          )}
        </Fragment>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-3 justify-between">
          <h1
            data-name={name}
            className="text-xl   capitalize  font-bold tracking-tight md:before:content-[attr(data-name)] md:before:pe-2"
          >
            departmental sectors{" "}
            <span className="text-muted-foreground  slashed-zero tabular-nums font-normal">
              ({formatNumber(_count.departmentalSectors)})
            </span>
          </h1>
          <ButtonAddEditDepartmentalSector departMentId={id} size={"sm"}>
            <PlusIcon className="size-4" />
            <span>New</span>
          </ButtonAddEditDepartmentalSector>
        </div>
        <ListOfDepartmentalSectors
          departmentalSectors={departmentalSectors}
          departMentId={id}
        />
        <Link
          href={``}
          className={buttonVariants({
            variant: "ghost",
            className: "group/more w-full max-w-fit mx-auto text-primary",
          })}
        >
          <span>View more</span>
          <MoveRightIcon className="h-4 group-hover/more:translate-x-2 transition-all " />
        </Link>
      </CardContent>
    </Card>
  );
}
