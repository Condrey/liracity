import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DepartmentData } from "@/lib/types";
import { PlusIcon } from "lucide-react";
import { Fragment } from "react";
import ButtonAddEditDepartmentalSector from "./(departmental-sector)/button-add-edit-departmental-sector";
import ListOfDepartmentalSectors from "./(departmental-sector)/list-of-departmental-sectors";

interface DepartmentContainerProps {
  department: DepartmentData;
  numbering: string;
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
          <CardTitle>
            <span className="text-muted-foreground italic">{numbering}. </span>{" "}
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
            className="text-xl  first-letter:uppercase  font-bold tracking-tight md:before:content-[attr(data-name)] md:before:pe-2"
          >
            departmental sectors
          </h1>
          <ButtonAddEditDepartmentalSector departMentId={id} size={"sm"}>
            <PlusIcon className="size-4" />
            <span>New</span>
          </ButtonAddEditDepartmentalSector>
        </div>
        <p>The following are the various sectors under this department;</p>
        <ListOfDepartmentalSectors
          departmentalSectors={departmentalSectors}
          departMentId={id}
        />
      </CardContent>
    </Card>
  );
}
