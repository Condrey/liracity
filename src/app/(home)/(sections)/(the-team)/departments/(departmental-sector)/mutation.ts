"use client";

import { DepartmentData } from "@/lib/types";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteDepartmentalSector, upsertDepartmentalSector } from "./action";

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
      toast.success(data.departMent?.name, {
        description: `successfully ${isSubmission ? "Added" : "Updated"} ${
          data.name
        } sector to the ${data.departMent?.name} department.`,
      });
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(
        `Failed to ${
          variables.id ? "update" : "add"
        } this departmental sector.`
      );
    },
  });
  return mutation;
}
export function useDeleteDepartmentalSectorMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteDepartmentalSector,
    async onSuccess(data, variables, context) {
      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<DepartmentData[]>(
        queryKey,
        (oldData) =>
          oldData &&
          oldData.map((d) => ({
            ...d,
            departmentalSectors: d.departmentalSectors.filter(
              (ds) => ds.id !== data.id
            ),
          }))
      );
      toast.success(data.departMent?.name, {
        description: `Deleted ${data.name} sector from the ${data.departMent?.name} department successfully`,
      });
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(`Failed to delete this departmental sector.`);
    },
  });
}
