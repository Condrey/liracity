"use client";

import { PageTitle } from "@/components/page-utils";
import EmptyContainer from "@/components/query-containers/empty-container";
import ErrorContainer from "@/components/query-containers/error-container";
import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Entity } from "@/generated/prisma";
import { Edit3Icon } from "lucide-react";
import ButtonAddEditGeographicalLandmarks from "./button-add-edit-geographical-landmarks";
import { useEntityQuery } from "./query";

interface GeographyAndLandmarksProps extends React.ComponentProps<"div"> {
	entity: Entity;
}
export default function GeographyAndLandmarks({ entity }: GeographyAndLandmarksProps) {
	const query = useEntityQuery(entity);
	const { data, status } = query;

	return (
		<>
			<PageTitle heading="Geography and landmarks" />

			{status === "error" ? (
				<ErrorContainer query={query} errorMessage="Failed to fetch geography and landmarks " />
			) : status === "success" && !data?.geographicalLandmarks ? (
				<EmptyContainer message="There is no geography and landmarks  yet.">
					<ButtonAddEditGeographicalLandmarks variant={"secondary"}>Click to add</ButtonAddEditGeographicalLandmarks>
				</EmptyContainer>
			) : (
				<div>
					<ButtonAddEditGeographicalLandmarks
						size={"icon"}
						variant={"outline"}
						className="m-2 flex-none"
						geographicalLandmarks={data?.geographicalLandmarks!}
					>
						<Edit3Icon />
					</ButtonAddEditGeographicalLandmarks>
					<TipTapViewer content={data?.geographicalLandmarks} className="z-0 text-justify text-pretty hyphens-auto" />
				</div>
			)}
		</>
	);
}
