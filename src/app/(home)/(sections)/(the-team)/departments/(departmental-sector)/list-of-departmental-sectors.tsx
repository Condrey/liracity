import EmptyContainer from "@/components/query-containers/empty-container";
import { DepartmentalSectorData } from "@/lib/types";
import ButtonAddEditDepartmentalSector from "./button-add-edit-departmental-sector";
import DepartmentalSectorContainer from "./departmental-sector-container";
import Link from "next/link";
import { MoveRightIcon } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { DataTable } from "@/components/data-table/data-table";
interface ListOfDepartmentalSectorsProps {
  departmentalSectors: DepartmentalSectorData[];
  departMentId: string;
}

export default function ListOfDepartmentalSectors({
  departmentalSectors: sectors,
  departMentId,
}: ListOfDepartmentalSectorsProps) {
  return (
    <div>
      {!sectors.length ? (
        <EmptyContainer
          message={
            "There are no departmental sectors added in the database yet, please add"
          }
          className="min-h-[10rem]"
        >
          <ButtonAddEditDepartmentalSector
            variant={"secondary"}
            departMentId={departMentId}
          >
            Add a new sector
          </ButtonAddEditDepartmentalSector>
        </EmptyContainer>
      ) : (
        <div className="flex flex-col w-full gap-4">
          <p className="italic text-lg">The following are the various sectors under this department;</p>
          <ul className=" space-y-6 list-decimal list-inside">
            {sectors.slice(0,3).map((sector) => (
              <DepartmentalSectorContainer
                key={sector.id}
                departmentalSector={sector}
              />
            ))}
          </ul>
          <Link href={``} className={buttonVariants({variant:"ghost",className:"group/more w-full max-w-fit mx-auto text-primary"})}>
          <span>View more</span>
          <MoveRightIcon className="h-4 group-hover/more:translate-x-2 transition-all "/>
          </Link>
        </div>
      )}
    </div>
  );
}
