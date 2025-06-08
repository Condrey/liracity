"use client";

import { DepartmentData } from "@/lib/types";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteDepartment, upsertDepartment } from "./action";

const queryKey: QueryKey = ["department", "list"];

export function useUpsertDepartmentMutation() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: upsertDepartment,
    onSuccess: async (data, variables) => {
      const key2: QueryKey = ["department", data.id];
      const key3: QueryKey = ["sector"];
      await queryClient.cancelQueries({ queryKey });
      const isSubmission = !variables.id;

      queryClient.setQueryData<DepartmentData[]>(queryKey, (oldData) => {
        if (!oldData) return;
        if (!isSubmission) {
          return oldData.map((d) => (d.id === data.id ? data : d));
        }

        return [data, ...oldData];
      });
      queryClient.invalidateQueries({ queryKey: key2 });
      queryClient.invalidateQueries({ queryKey: key3 });

      toast.success(
        `${isSubmission ? "Added" : "Updated"} ${
          data.name
        } department successfully`,
      );
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(
        `Failed to ${variables.id ? "update" : "add"} ${
          variables.name
        } department.`,
      );
    },
  });
  return mutation;
}

export function useDeleteDepartmentMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: deleteDepartment,
    async onSuccess(data, variables, context) {
      const key2: QueryKey = ["department", data.id];
      const key3: QueryKey = ["sector"];

      await queryClient.cancelQueries({ queryKey });
      queryClient.setQueryData<DepartmentData[]>(
        queryKey,
        (oldData) => oldData && oldData.filter((d) => d.id !== data.id),
      );
      queryClient.invalidateQueries({ queryKey: key2 });
      queryClient.invalidateQueries({ queryKey: key3 });

      toast.success(`Deleted ${data.name} department successfully`);
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(`Failed to delete department.`);
    },
  });
}
