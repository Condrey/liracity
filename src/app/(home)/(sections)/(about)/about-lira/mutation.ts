"use client";

import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import {
  upsertAbout,
  upsertGeographyAndLandmarks,
  upsertHistoryAndCulture,
} from "./action";
import { toast } from "sonner";

const queryKey: QueryKey = ["entity"];

export function useUpsertAboutMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: upsertAbout,
    async onSuccess(data, variables, context) {
      toast.success("Successfully updated about information.");
      await queryClient.cancelQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey });
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error("Failed to update about information");
    },
  });
}

export function useUpsertHistoryAndCultureMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: upsertHistoryAndCulture,
    async onSuccess(data, variables, context) {
      toast.success("Successfully updated history and culture.");
      await queryClient.cancelQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey });
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error("Failed to update history and culture");
    },
  });
}

export function useUpsertGeographicalLandmarksMutation() {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: upsertGeographyAndLandmarks,
    async onSuccess(data, variables, context) {
      toast.success("Successfully updated geography and landmarks.");
      await queryClient.cancelQueries({ queryKey });
      queryClient.invalidateQueries({ queryKey });
    },
    onError(error, variables, context) {
      console.error(error);
      toast.error("Failed to update geography and landmarks");
    },
  });
}
