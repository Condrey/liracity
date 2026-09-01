"use client";

import { authClient } from "@/lib/auth-client";
import { departmentalSectionSchema, DepartmentalSectionSchema } from "@/lib/validation";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteDepartmentalSection,upsertDepartmentalSection } from "./action";

const queryKey: QueryKey = ["departmentalSections"];

export function useUpsertDepartmentalSectionMutation(userId: string | undefined) {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: upsertDepartmentalSection,
		onSuccess: async (data, variables) => {

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				
			]);

			queryClient.invalidateQueries({ queryKey });


			toast.success("success", {
				description: !variables.id ? "Departmental Section added" : "Departmental Section updated"
			});
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to ${variables.id ? "update" : "add"}departmental Section.`);
		}
	});
	return mutation;
}

export function useDeleteDepartmentalSectionMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteDepartmentalSection,
		async onSuccess(data, variables, context) {

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				
			]);

			queryClient.invalidateQueries({ queryKey });
			

			toast.success(`Deleted departmental Section successfully`);
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to delete departmental Section.`);
		}
	});
}
