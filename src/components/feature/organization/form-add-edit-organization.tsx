import ResponsiveDrawer from "@/components/responsive-drawer";
import TipTapEditorWithHeader from "@/components/tip-tap-editor/tip-tap-editor-with-header";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { useSession } from "@/lib/session-provider";
import { OrganizationData } from "@/lib/types";
import { organizationSchema, OrganizationSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpsertOrganizationMutation } from "./mutation";

interface FormAddEditOrganizationProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	organizationToEdit?: OrganizationData;
}
export default function FormAddEditOrganization({ open, setOpen, organizationToEdit }: FormAddEditOrganizationProps) {
	const { session } = useSession();
	const form = useForm<OrganizationSchema>({
		resolver: zodResolver(organizationSchema),
		values: {
			id: organizationToEdit?.id || "",
			name: organizationToEdit?.name || "",
			slug: organizationToEdit?.slug || "",
			metadata: organizationToEdit?.metadata || undefined,
			logo: organizationToEdit?.logo || "",
			keepCurrentActiveOrganization: false
		}
	});
	const watchedName = form.watch("name");

	const { isPending, mutate, error } = useUpsertOrganizationMutation(session?.userId);
	function onSubmit(input: OrganizationSchema) {
		mutate(input, {
			onSuccess() {
				setOpen(false);
				form.reset();
			}
		});
	}

	return (
		<ResponsiveDrawer open={open} setOpen={setOpen} title={organizationToEdit ? "Update department" : "Add department"}>
			<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
					<FormField
						control={form.control}
						name="name"
						render={({ field }) => (
							<FormItem>
								<FormLabel required>Department name</FormLabel>
								<FormControl>
									<Input placeholder="e.g Administration" {...field} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="slug"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Slug</FormLabel>
								<FormControl>
									<Input type="text" placeholder="e.g., osborn-deluxe" {...field} />
								</FormControl>
								<FormMessage />
								<FormDescription>Enter slug separated by hyphens.</FormDescription>
							</FormItem>
						)}
					/>
					<FormField
						control={form.control}
						name="about"
						render={({ field }) => (
							<FormItem>
								<FormLabel>Brief description</FormLabel>
								<FormControl>
									<TipTapEditorWithHeader
										onChange={field.onChange}
										placeholder={`Brief description about ${watchedName || "this"} department`}
										value={field.value}
										includeHeader={false}
									/>
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
					<div role="alert" className="text-destructive">
						{error?.message}
					</div>
					<div className="flex w-full items-center justify-end gap-4">
						<LoadingButton loading={isPending} disabled={!form.formState.isDirty}>
							{organizationToEdit ? "Update department" : "Add department"}
						</LoadingButton>
					</div>
				</form>
			</Form>
		</ResponsiveDrawer>
	);
}
