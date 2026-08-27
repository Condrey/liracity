"use client";

import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteEvent, removeEventMedia, updateEventStatus, upsertEvent, upsertEventCategory } from "./action";

const queryKey: QueryKey = ["event-categories"];
export function useUpsertEventCategoryMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: upsertEventCategory,
		async onSuccess(data, variables, context) {
			await queryClient.cancelQueries({ queryKey });
			queryClient.invalidateQueries({ queryKey });
			toast.success(`Successfully ${!variables.id ? "added" : "updated"} the category`);
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error("Submission error", { description: "There was trouble submitting category. Please try again!" });
		}
	});
}

export function useUpsertEventMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: upsertEvent,
		async onSuccess(data, variables, context) {
			const queryKey: QueryKey = ["event", data.id];
			const queryKey2: QueryKey = ["event", "slug"];
			const queryKey3: QueryKey = ["events"];

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				await queryClient.cancelQueries({ queryKey: queryKey2 }),
				await queryClient.cancelQueries({ queryKey: queryKey3 })
			]);
			queryClient.invalidateQueries({ queryKey });
			queryClient.invalidateQueries({ queryKey: queryKey2 });
			queryClient.invalidateQueries({ queryKey: queryKey3 });
			toast.success(`Successfully submitted the event `);
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error("Submission error", { description: "There was trouble submitting . Please try again!" });
		}
	});
}
export function useUpdateEventStatusMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: updateEventStatus,
		async onSuccess(data, variables, context) {
			const queryKey: QueryKey = ["event", variables.eventId];
			const queryKey2: QueryKey = ["event", "slug"];
			const queryKey3: QueryKey = ["events"];

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				await queryClient.cancelQueries({ queryKey: queryKey2 }),
				await queryClient.cancelQueries({ queryKey: queryKey3 })
			]);
			queryClient.invalidateQueries({ queryKey });
			queryClient.invalidateQueries({ queryKey: queryKey2 });
			queryClient.invalidateQueries({ queryKey: queryKey3 });
			toast.success(`Successfully updated event status`);
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error("Submission error", { description: "There was trouble updating event. Please try again!" });
		}
	});
}

export function useDeleteEventMediaMutation() {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: removeEventMedia,
		onSuccess: async (data, variables) => {
			const queryKey: QueryKey = ["event", data.id];
			const queryKey2: QueryKey = ["event", "slug"];
			const queryKey3: QueryKey = ["events"];

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				await queryClient.cancelQueries({ queryKey: queryKey2 }),
				await queryClient.cancelQueries({ queryKey: queryKey3 })
			]);
			queryClient.invalidateQueries({ queryKey });
			queryClient.invalidateQueries({ queryKey: queryKey2 });
			queryClient.invalidateQueries({ queryKey: queryKey3 });

			// Return a context with the previous state to rollback in case of error
			toast.success("Success", { description: "event image deleted successfully" });
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error("Failed", {
				description: "Something went wrong. Please try again."
			});
		}
	});

	return mutation;
}

export function useDeleteEventMutation() {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: deleteEvent,
		onSuccess: async (data, variables) => {
			const queryKey: QueryKey = ["event", data.id];
			const queryKey2: QueryKey = ["event", "slug"];
			const queryKey3: QueryKey = ["events"];

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				await queryClient.cancelQueries({ queryKey: queryKey2 }),
				await queryClient.cancelQueries({ queryKey: queryKey3 })
			]);
			queryClient.invalidateQueries({ queryKey });
			queryClient.invalidateQueries({ queryKey: queryKey2 });
			queryClient.invalidateQueries({ queryKey: queryKey3 });

			// Return a context with the previous state to rollback in case of error
			toast.success("Success", { description: "event  deleted successfully" });
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error("Failed", {
				description: "Something went wrong. Please try again."
			});
		}
	});

	return mutation;
}
