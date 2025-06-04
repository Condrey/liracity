"use client";

import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Entity } from "@/generated/prisma";
import ButtonAddEditAbout from "./button-add-edit-about";
import { useEntityQuery } from "./query";
import { Edit3Icon } from "lucide-react";

interface AboutProps {
  entity: Entity;
}

export default function About({ entity }: AboutProps) {
  const query = useEntityQuery(entity);

  const { data, status } = query;
  return (
    <div id='about'>
      {status === "error" ? (
        <ErrorContainer
          query={query}
          errorMessage="Failed to fetch about information"
        />
      ) : status === "success" && !data?.about ? (
        <EmptyContainer message="There is no about information yet.">
          <ButtonAddEditAbout variant={"secondary"}>
            Click to add
          </ButtonAddEditAbout>
        </EmptyContainer>
      ) : (
        <div className=''>
            <ButtonAddEditAbout size={'icon' } variant={'outline'} className="flex-none  m-2" about={data?.about!}>
                <Edit3Icon /> 
            </ButtonAddEditAbout>
            <TipTapViewer content={data?.about} className=' inline  text-pretty hyphens-auto text-justify' />
        </div>
      )}
    </div>
  );
}
