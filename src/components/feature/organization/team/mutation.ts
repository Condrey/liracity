"use client";

import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteTeam, upsertTeam } from "./action";

const queryKey: QueryKey = ["list-of-organizations"];
const queryKey2: QueryKey = ["department", "slug"];
const queryKey3: QueryKey = ["members", "organization"];

export function useUpsertTeamMutation() {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: upsertTeam,
		onSuccess: async (data, variables) => {
			const queryKey4: QueryKey = ["team", data?.id];

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				await queryClient.cancelQueries({ queryKey: queryKey2 }),
				await queryClient.cancelQueries({ queryKey: queryKey3 }),
				await queryClient.cancelQueries({ queryKey: queryKey4 })
			]);

			queryClient.invalidateQueries({ queryKey });
			queryClient.invalidateQueries({ queryKey: queryKey2 });
			queryClient.invalidateQueries({ queryKey: queryKey3 });
			queryClient.invalidateQueries({ queryKey: queryKey4 });

			toast.success("Success", {
				description: `successfully ${data?.id ? "Added" : "Updated"} ${data?.name} section.`
			});
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to ${variables.id ? "update" : "add"} this section.`);
		}
	});
	return mutation;
}
export function useDeleteTeamMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteTeam,
		async onSuccess(data, variables, context) {
			const queryKey3: QueryKey = ["team", variables.id];

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				await queryClient.cancelQueries({ queryKey: queryKey2 }),
				await queryClient.cancelQueries({ queryKey: queryKey3 })
			]);

			queryClient.invalidateQueries({ queryKey });
			queryClient.invalidateQueries({ queryKey: queryKey2 });
			queryClient.invalidateQueries({ queryKey: queryKey3 });

			toast.success("Success", {
				description: `Deleted ${variables?.name} section successfully`
			});
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to delete this section.`);
		}
	});
}
