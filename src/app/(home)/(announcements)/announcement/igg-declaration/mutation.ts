"use client";

import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteIggDeclaration, upsertIggDeclaration } from "./action";
import { toast } from "sonner";

const queryKey: QueryKey = ["iggDeclarations"];

export function useUpsertIggDeclarationMutation() {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: upsertIggDeclaration,
		onSuccess: async (data, variables) => {
			await Promise.all([await queryClient.cancelQueries({ queryKey })]);

			queryClient.invalidateQueries({ queryKey });

			toast.success("success", {
				description: !variables.id ? "IggDeclaration added" : "IggDeclaration updated"
			});
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to ${variables.id ? "update" : "add"} ${variables.name}'s iggDeclaration.`);
		}
	});
	return mutation;
}

export function useDeleteIggDeclarationMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteIggDeclaration,
		async onSuccess(data, variables, context) {
			const queryKey3: QueryKey = ["team", variables.id];

			await Promise.all([await queryClient.cancelQueries({ queryKey })]);

			queryClient.invalidateQueries({ queryKey });

			toast.success("Success", {
				description: `Deleted ${variables?.name}  successfully`
			});
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to delete this leader.`);
		}
	});
}
