"use client";

import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteEmployee, upsertStaffEmployee } from "./action";

export function upsertStaffEmployeeMutation() {
	const queryClient = useQueryClient();

	return useMutation({
		mutationFn: upsertStaffEmployee,
		onSuccess: async (data, variables) => {
			const queryKey: QueryKey = ["sector", variables.organizationId];
			if (typeof data === "string") {
				toast.warning("Duplicates", { description: data });
				return;
			}
			await queryClient.cancelQueries({ queryKey });
			const isSubmission = !variables.employeeId;

			queryClient.invalidateQueries({ queryKey });
			toast.success(`successfully ${isSubmission ? "Added" : "Updated"} staff `);
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to ${variables.employeeId ? "update" : "add"} staff ${variables.name} .`);
		}
	});
}

export function useDeleteEmployeeMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteEmployee,
		async onSuccess(data, variables, context) {
			const queryKey: QueryKey = ["sector", ];

			queryClient.invalidateQueries({ queryKey });

			toast.success(`Successfully deleted staff from the system`);
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to delete employee.`);
		}
	});
}
