"use client";

import { Entity } from "@/generated/prisma/client";
import { useQuery } from "@tanstack/react-query";
import { getEntity } from "./action";

export const useEntityQuery = (entity: Entity) =>
	useQuery({
		queryKey: ["entity"],
		queryFn: getEntity,
		initialData: entity,
		refetchOnWindowFocus: false
	});
