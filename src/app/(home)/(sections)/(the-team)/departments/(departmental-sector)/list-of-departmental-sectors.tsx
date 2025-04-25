import EmptyContainer from "@/components/query-containers/empty-container";
import { DepartmentalSectorData } from "@/lib/types";
import ButtonAddEditDepartmentalSector from "./button-add-edit-departmental-sector";
import DepartmentalSectorContainer from "./departmental-sector-container";

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
        <div>
          {sectors.map((sector) => (
            <DepartmentalSectorContainer
              key={sector.id}
              departmentalSector={sector}
            />
          ))}
        </div>
      )}
    </div>
  );
}
