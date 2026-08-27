import ResponsiveDrawer from "@/components/responsive-drawer";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { TeamData } from "@/lib/types";
import { teamSchema, TeamSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpsertTeamMutation } from "./mutation";

interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
	teamToEdit?: TeamData;
	organizationId: string;
}

export default function FormAddEditTeam({ open, setOpen, teamToEdit, organizationId }: Props) {
	const form = useForm<TeamSchema>({
		resolver: zodResolver(teamSchema),
		defaultValues: {
			id: teamToEdit?.id || "",
			name: teamToEdit?.name || "",

			organizationId: teamToEdit?.organizationId || organizationId || ""
		}
	});
	const watchedName = form.watch("name");

	const { isPending, mutate } = useUpsertTeamMutation();
	function onSubmit(input: TeamSchema) {
		mutate(input, {
			onSuccess() {
				setOpen(false);
			}
		});
	}

	return (
		<ResponsiveDrawer open={open} setOpen={setOpen} title={teamToEdit ? "Update section" : "Add section"}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel required>Section</FormLabel>
								<FormControl>
									<Input placeholder="e.g Information Technology" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>

					<div className="flex w-full items-center justify-end gap-4">
						<LoadingButton loading={isPending}>{teamToEdit ? "Update" : "Submit"}</LoadingButton>
					</div>
				</form>
			</Form>
		</ResponsiveDrawer>
	);
}
