"use client";

import { PageTitle } from "@/components/page-utils";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Entity } from "@/generated/prisma";
import { Edit3Icon } from "lucide-react";
import ButtonAddEditHistoryAndCulture from "./button-add-edit-history-and-culture";
import { useEntityQuery } from "./query";

interface HistoryAndCultureProps {
  entity: Entity;
}
export default function HistoryAndCulture({ entity }: HistoryAndCultureProps) {
  const query = useEntityQuery(entity);
  const { data, status } = query;

  return (
    <div id="history-culture">
      <PageTitle heading="History and culture" />
      {status === "error" ? (
        <ErrorContainer
          query={query}
          errorMessage="Failed to fetch history and culture"
        />
      ) : status === "success" && !data?.historyAndCulture ? (
        <EmptyContainer message="There is no history and culture yet.">
          <ButtonAddEditHistoryAndCulture variant={"secondary"}>
            Click to add
          </ButtonAddEditHistoryAndCulture>
        </EmptyContainer>
      ) : (
        <div className="flex">
          <ButtonAddEditHistoryAndCulture
            size={"icon"}
            variant={"outline"}
            className="flex-none  mr-2"
            historyAndCulture={data?.historyAndCulture!}
            
          >
            <Edit3Icon />
          </ButtonAddEditHistoryAndCulture>
          <TipTapViewer
            content={data?.historyAndCulture}
            className=" inline  text-pretty hyphens-auto text-justify"
          />
        </div>
      )}
    </div>
  );
}
