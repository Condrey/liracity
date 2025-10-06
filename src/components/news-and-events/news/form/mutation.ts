"use client";

import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { removeNewsArticleMedia, upsertNewsArticle, upsertNewsArticleCategory } from "./action";

const queryKey: QueryKey = ["news-article-categories"];
export function useUpsertNewsArticleCategoryMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: upsertNewsArticleCategory,
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

export function useUpsertNewsArticleMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: upsertNewsArticle,
		async onSuccess(data, variables, context) {
			const queryKey: QueryKey = ["news-article", data.id];
			const queryKey2: QueryKey = ["news-articles"];

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				await queryClient.cancelQueries({ queryKey: queryKey2 })
			]);
			queryClient.invalidateQueries({ queryKey });
			queryClient.invalidateQueries({ queryKey: queryKey2 });
			toast.success(`Successfully submitted the news article`);
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error("Submission error", { description: "There was trouble submitting article. Please try again!" });
		}
	});
}

export function useDeleteNewsArticleMediaMutation() {
	const queryClient = useQueryClient();

	const mutation = useMutation({
		mutationFn: removeNewsArticleMedia,
		onSuccess: async (updatedNewsArticle, variables) => {
			const queryKey: QueryKey = ["news-articles"];

			await queryClient.cancelQueries({ queryKey });

			queryClient.invalidateQueries({ queryKey });

			// Return a context with the previous state to rollback in case of error
			toast.success("Success", { description: "flashcard image deleted successfully" });
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
