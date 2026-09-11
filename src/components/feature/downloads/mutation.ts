"use client";

import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteDownload, upsertDownload } from "./action";

const queryKey: QueryKey = ["downloads"];

export function useUpsertDownloadMutation() {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: upsertDownload,
		onSuccess: async (data, variables) => {
			await Promise.all([await queryClient.cancelQueries({ queryKey })]);

			queryClient.invalidateQueries({ queryKey });

			toast.success("success", {
				description: !variables.download.id ? "Download added" : "Download updated"
			});
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to ${variables.download.id ? "update" : "add"}download.`);
		}
	});
	return mutation;
}

export function useDeleteDownloadMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteDownload,
		async onSuccess(data, variables, context) {
			await Promise.all([await queryClient.cancelQueries({ queryKey })]);

			queryClient.invalidateQueries({ queryKey });

			toast.success(`Deleted download successfully`);
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to delete download.`);
		}
	});
}
