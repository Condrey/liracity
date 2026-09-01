"use client";

import { authClient } from "@/lib/auth-client";
import { positionSchema, PositionSchema } from "@/lib/validation";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deletePosition,upsertPosition } from "./action";

const queryKey: QueryKey = ["positions"];

export function useUpsertPositionMutation(userId: string | undefined) {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: upsertPosition,
		onSuccess: async (data, variables) => {

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				
			]);

			queryClient.invalidateQueries({ queryKey });


			toast.success("success", {
				description: !variables.id ? "Position added" : "Position updated"
			});
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to ${variables.id ? "update" : "add"} ${variables.jobTitle} position.`);
		}
	});
	return mutation;
}

export function useDeletePositionMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deletePosition,
		async onSuccess(data, variables, context) {

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				
			]);

			queryClient.invalidateQueries({ queryKey });
			

			toast.success(`Deleted ${data.jobTitle} position successfully`);
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to delete position.`);
		}
	});
}
