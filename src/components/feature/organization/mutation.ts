"use client";

import { authClient } from "@/lib/auth-client";
import { organizationSchema, OrganizationSchema } from "@/lib/validation";
import { QueryKey, useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";
import { deleteOrganization } from "./action";

const queryKey: QueryKey = ["list-of-organizations"];
const queryKey2: QueryKey = ["team"];

export function useUpsertOrganizationMutation(userId: string | undefined) {
	const queryClient = useQueryClient();
	const mutation = useMutation({
		mutationFn: async (organization: OrganizationSchema) => {
			const { name, slug, logo, metadata, id, keepCurrentActiveOrganization, about } =
				organizationSchema.parse(organization);
			if (!id) {
				// throw Error(JSON.stringify({ id, name, len: id?.length }));
				// Check if the slug is taken
				await authClient.organization.checkSlug({
					slug
				});
				return await authClient.organization.create({
					name,
					slug,
					logo,
					userId,
					keepCurrentActiveOrganization,
					about
					// metadata
				});
			}
			// To create a new organization
			else {
				return await authClient.organization.update({
					organizationId: id,
					data: {
						name,
						slug,
						logo,
						about
						// metadata
					}
				});
			}
		},
		onSuccess: async (data, variables) => {
			const queryKey3 = ["organization", "slug", variables.slug];

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				await queryClient.cancelQueries({ queryKey: queryKey2 }),
				await queryClient.cancelQueries({ queryKey: queryKey3 })
			]);

			queryClient.invalidateQueries({ queryKey });
			queryClient.invalidateQueries({ queryKey: queryKey2 });
			queryClient.invalidateQueries({ queryKey: queryKey3 });

			toast.success("success", {
				description: !variables.id ? "department added" : "department updated"
			});
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to ${variables.id ? "update" : "add"} ${variables.name} department.`);
		}
	});
	return mutation;
}

export function useDeleteOrganizationMutation() {
	const queryClient = useQueryClient();
	return useMutation({
		mutationFn: deleteOrganization,
		async onSuccess(data, variables, context) {
			const queryKey3 = ["organization", "slug", variables.slug];

			await Promise.all([
				await queryClient.cancelQueries({ queryKey }),
				await queryClient.cancelQueries({ queryKey: queryKey2 }),
				await queryClient.cancelQueries({ queryKey: queryKey3 })
			]);

			queryClient.invalidateQueries({ queryKey });
			queryClient.invalidateQueries({ queryKey: queryKey2 });
			queryClient.invalidateQueries({ queryKey: queryKey3 });

			toast.success(`Deleted ${data.name} department successfully`);
		},
		onError(error, variables, context) {
			console.error(error);
			toast.error(`Failed to delete department.`);
		}
	});
}
