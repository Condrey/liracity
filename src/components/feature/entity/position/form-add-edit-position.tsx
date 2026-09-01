import ResponsiveDrawer from "@/components/responsive-drawer";
import TipTapEditorWithHeader from "@/components/tip-tap-editor/tip-tap-editor-with-header";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { useSession } from "@/lib/session-provider";
import { PositionData } from "@/lib/types";
import { positionSchema, PositionSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import FieldReportsTo from "./field-reports-to";
import { useUpsertPositionMutation } from "./mutation";
import FieldDepartmentalSection from "./field-departmental-section";
import {Sheet, SheetContent, SheetTitle, SheetHeader} from '@/components/ui/sheet'
import { Textarea } from "@/components/ui/textarea";

interface FormAddEditPositionProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	positionToEdit?: PositionData;
}
export default function FormAddEditPosition({ open, setOpen, positionToEdit }: FormAddEditPositionProps) {
	const { session } = useSession();
	const form = useForm<PositionSchema>({
		resolver: zodResolver(positionSchema),
		values: {
			id: positionToEdit?.id || "",
			jobTitle: positionToEdit?.jobTitle || "",
			jobPurpose: positionToEdit?.jobPurpose || "",
			salaryScale: positionToEdit?.salaryScale || "",
			reportsToId: positionToEdit?.reportsToId || "",
			dutiesAndQualifications: positionToEdit?.dutiesAndQualifications || "",
			departmentalSectionId: positionToEdit?.departmentalSectionId || ""
		}
	});

	const { isPending, mutate, error } = useUpsertPositionMutation(session?.userId);
	function onSubmit(input: PositionSchema) {
		mutate(input, {
			onSuccess() {
				setOpen(false);
				form.reset();
			}
		});
	}

	return (
		<Sheet open={open} onOpenChange={setOpen} >
			<SheetContent side="top" className="h-svh w-full px-4 overflow-auto">
				<SheetHeader>
					<SheetTitle> {positionToEdit ? "Update Position" : "Add Position"}</SheetTitle>
					</SheetHeader>
				<Form {...form}>
				<form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mx-auto w-full max-w-5xl ">
					<div className="flex flex-col *:flex-1 flex-wrap gap-3 md:flex-row">
						<FormField
							control={form.control}
							name="jobTitle"
							render={({ field }) => (
								<FormItem>
									<FormLabel required>Job title</FormLabel>
									<FormControl>
										<Input placeholder="e.g., IT Officer" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="salaryScale"
							render={({ field }) => (
								<FormItem>
									<FormLabel required>Salary Scale</FormLabel>
									<FormControl>
										<Input placeholder="e.g., U4" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					</div>
					<div className="flex flex-col *:flex-1 flex-wrap gap-3 md:flex-row">
						<FieldReportsTo form={form} />
						<FieldDepartmentalSection form={form} />
					</div>
					<FormField
							control={form.control}
							name="jobPurpose"
							render={({ field }) => (
								<FormItem>
									<FormLabel required>Job purpose</FormLabel>
									<FormControl>
										<Textarea placeholder="enter job purpose" {...field} />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
					<FormField
						control={form.control}
						name="dutiesAndQualifications"
						render={({ field }) => (
							<FormItem>
								<FormLabel required>Duties and Qualifications</FormLabel>
								<FormControl>
									<TipTapEditorWithHeader
										onChange={field.onChange}
										placeholder={`Add Duties and Person Specification for this position`}
										value={field.value}
										includeHeader={true}
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
							{positionToEdit ? "Update position" : "Add position"}
						</LoadingButton>
					</div>
				</form>
			</Form>
			</SheetContent>
		</Sheet>
	);
}
