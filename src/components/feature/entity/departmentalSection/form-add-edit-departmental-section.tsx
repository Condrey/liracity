import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { StationType } from "@/generated/prisma/enums";
import { useSession } from "@/lib/session-provider";
import { DepartmentalSectionData } from "@/lib/types";
import { departmentalSectionSchema, DepartmentalSectionSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FieldStationType from "./field-station-type";
import { useUpsertDepartmentalSectionMutation } from "./mutation";

interface FormAddEditDepartmentalSectionProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	departmentalSectionToEdit?: DepartmentalSectionData;
}
export default function FormAddEditDepartmentalSection({
	open,
	setOpen,
	departmentalSectionToEdit
}: FormAddEditDepartmentalSectionProps) {
	const { session } = useSession();
	const form = useForm<DepartmentalSectionSchema>({
		resolver: zodResolver(departmentalSectionSchema),
		values: {
			id: departmentalSectionToEdit?.id || "",
			sectionName: departmentalSectionToEdit?.sectionName || "",
			stationType: departmentalSectionToEdit?.stationType || StationType.DIVISION
		}
	});

	const { isPending, mutate, error } = useUpsertDepartmentalSectionMutation(session?.userId);
	function onSubmit(input: DepartmentalSectionSchema) {
		mutate(input, {
			onSuccess() {
				setOpen(false);
				form.reset();
			}
		});
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetContent className="px-4">
				<SheetHeader>
					<SheetTitle>
						{departmentalSectionToEdit ? "Update Departmental Section" : "Add Departmental Section"}
					</SheetTitle>
				</SheetHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
						<FormField
							control={form.control}
							name="sectionName"
							render={({ field }) => (
								<FormItem>
									<FormLabel required>Section name</FormLabel>
									<FormControl>
										<Input placeholder="e.g., Administration" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FieldStationType form={form} />
						<div role="alert" className="text-destructive">
							{error?.message}
						</div>
						<div className="flex w-full items-center justify-end gap-4">
							<LoadingButton
								type="button"
								loading={isPending}
								disabled={!form.formState.isDirty}
								onClick={() => form.handleSubmit(onSubmit)()}
							>
								{departmentalSectionToEdit ? "Update department section" : "Add department section"}
							</LoadingButton>
						</div>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
