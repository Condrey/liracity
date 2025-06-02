"use client";

import { DepartmentData } from "@/lib/types";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { upsertDepartment } from "./action";

const queryKey: QueryKey = ["department", "list"];

export function useUpsertDepartmentMutation() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: upsertDepartment,
    onSuccess: async (data, variables) => {
      await queryClient.cancelQueries({ queryKey });
      const isSubmission = !variables.id;

      queryClient.setQueryData<DepartmentData[]>(queryKey, (oldData) => {
        if (!oldData) return;
        if (!isSubmission) {
          return oldData.map((d) => (d.id === data.id ? data : d));
        }

        return [data, ...oldData];
      });
      toast.success(
        `${isSubmission ? "Added" : "Updated"} department successfully`
      );
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error(`Failed to ${variables.id ? "update" : "add"} department.`);
    },
  });
  return mutation;
}
