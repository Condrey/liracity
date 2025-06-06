"use client";

import { useQuery } from "@tanstack/react-query";
import { getEntity } from "./action";
import { Entity } from "@/generated/prisma";

export const useEntityQuery = (entity: Entity) =>
  useQuery({
    queryKey: ["entity"],
    queryFn: getEntity,
    initialData: entity,
    refetchOnWindowFocus: false,
  });
