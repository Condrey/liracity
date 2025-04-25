"use client";

import { DepartmentData } from "@/lib/types";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { upsertDepartmentalSector } from "./action";

const queryKey: QueryKey = ["department", "list"];

export function useUpsertDepartmentalSectorMutation() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: upsertDepartmentalSector,
    onSuccess: async (data, variables) => {
      await queryClient.cancelQueries({ queryKey });
      const isSubmission = !variables.id;

      queryClient.setQueryData<DepartmentData[]>(queryKey, (oldData) => {
        if (!oldData) return;
        if (!isSubmission) {
          return oldData.map((d) => ({
            ...d,
            departmentalSectors: d.departmentalSectors.map((sector) =>
              sector.id === data.id ? data : sector
            ),
          }));
        }

        return oldData.map((d) =>
          d.id === data.departMentId
            ? { ...d, departmentalSectors: [data, ...d.departmentalSectors] }
            : d
        );
      });
      toast.info(
        `${
          isSubmission ? "Added" : "Updated"
        } departmental sectors successfully.`
      );
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(
        `Failed to ${variables.id ? "update" : "add"} departmental sectors.`
      );
    },
  });
  return mutation;
}
