"use client";

import { PageTitle } from "@/components/page-utils";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Entity } from "@/generated/prisma";
import { Edit3Icon } from "lucide-react";
import ButtonAddEditGeographicalLandmarks from "./button-add-edit-geographical-landmarks";
import { useEntityQuery } from "./query";

interface GeographyAndLandmarksProps {
  entity: Entity;
}
export default function GeographyAndLandmarks({
  entity,
}: GeographyAndLandmarksProps) {
  const query = useEntityQuery(entity);
  const { data, status } = query;

  return (
    <div id="geography" className="min-h-[70vh] ">
      <PageTitle heading="Geography and landmarks" />
      {status === "error" ? (
        <ErrorContainer
          query={query}
          errorMessage="Failed to fetch geography and landmarks "
        />
      ) : status === "success" && !data?.geographicalLandmarks ? (
        <EmptyContainer message="There is no geography and landmarks  yet.">
          <ButtonAddEditGeographicalLandmarks variant={"secondary"}>
            Click to add
          </ButtonAddEditGeographicalLandmarks>
        </EmptyContainer>
      ) : (
        <div className="flex">
          <ButtonAddEditGeographicalLandmarks
            size={"icon"}
            variant={"outline"}
            className="flex-none  mr-2  "
            geographicalLandmarks={data?.geographicalLandmarks!}
          >
            <Edit3Icon />
          </ButtonAddEditGeographicalLandmarks>
          <TipTapViewer
            content={data?.geographicalLandmarks}
            className=" inline  text-pretty hyphens-auto text-justify  "
          />
        </div>
      )}
    </div>
  );
}
