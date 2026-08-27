"use client";

import { NumberInput } from "@/components/number-input/number-input";
import { Button } from "@/components/ui/button";
import { ButtonGroup } from "@/components/ui/button-group";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { TableCell, TableRow } from "@/components/ui/table";
import { Role } from "@/generated/prisma/enums";
import { cn } from "@/lib/utils";
import { memberSignUpSchema, MemberSignUpSchema, MultipleMembersSignUpSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { EditIcon, PlusIcon, XIcon } from "lucide-react";
import { useFieldArray, useForm, UseFormReturn } from "react-hook-form";

interface Props {
	organizationId: string;
	form: UseFormReturn<MultipleMembersSignUpSchema>;
	index: number;
	isEditing: boolean;
	inputToEdit?: MemberSignUpSchema;
	onInputSubmitted: (member: MemberSignUpSchema) => void;
}

export default function TableRowInputMember({
	form,
	index,
	organizationId,
	isEditing,
	inputToEdit,
	onInputSubmitted
}: Props) {
	const { append: addEntry } = useFieldArray({ control: form.control, name: "members" });
	const form2 = useForm<MemberSignUpSchema>({
		resolver: zodResolver(memberSignUpSchema),
		values: {
			email: inputToEdit?.email || "",
			name: inputToEdit?.name || "",
			ippsNumber: inputToEdit?.ippsNumber,
			organizationId: organizationId || "",
			role: inputToEdit?.role || Role.STAFF
		}
	});
	function onAddOrEditEntry(input: MemberSignUpSchema) {
		if (!isEditing) {
			addEntry(input);
		}
		form2.reset();
		onInputSubmitted(input);
	}
	return (
		<Form {...form2}>
			<TableRow
				className={cn("*:border", !isEditing ? "bg-primary/20" : "bg-warning/20 dark:bg-warning-foreground/20")}
			>
				<TableCell>{index + 1}</TableCell>
				<TableCell>
					<FormField
						control={form2.control}
						name={`name`}
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input {...field} placeholder="e.g., John Doe" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</TableCell>
				<TableCell>
					<FormField
						control={form2.control}
						name={`email`}
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<Input type="email" {...field} placeholder="e.g., someone@gmail.com" />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</TableCell>
				<TableCell>
					<FormField
						control={form2.control}
						name={`ippsNumber`}
						render={({ field }) => (
							<FormItem>
								<FormControl>
									<NumberInput placeholder="e.g., 1810923 or 00181093" {...field} value={field.value!} />
								</FormControl>
								<FormMessage />
							</FormItem>
						)}
					/>
				</TableCell>
				<TableCell>
					<FormField
						control={form2.control}
						name={`role`}
						render={({ field }) => (
							<FormItem>
								<Select value={field.value} onValueChange={field.onChange}>
									<SelectTrigger className="w-full">
										<FormControl>
											<SelectValue />
										</FormControl>
									</SelectTrigger>
									<SelectContent position="popper">
										<SelectGroup>
											<SelectLabel>Choose a role from here</SelectLabel>
											{[Role.STAFF, Role.HOD, Role.ADMIN].map((role) => (
												<SelectItem key={role} value={role}>
													{role}
												</SelectItem>
											))}
										</SelectGroup>
									</SelectContent>
								</Select>
								<FormMessage />
							</FormItem>
						)}
					/>
				</TableCell>
				<TableCell>
					<ButtonGroup className="mx-auto w-full max-w-[150px] *:flex-1">
						{isEditing ? (
							<Button
								type="button"
								variant={"outline"}
								title="Close update container"
								onClick={() => onInputSubmitted(inputToEdit!)}
							>
								<span className="sr-only">Close update container</span>
								<XIcon />
								Close
							</Button>
						) : (
							<Button type="button" variant={"outline"} title="Reset typed fields" onClick={() => form2.reset()}>
								<span className="sr-only">Reset typed fields</span>
								<XIcon />
								Reset
							</Button>
						)}
						<Button
							type="button"
							variant={isEditing ? "warning" : "default"}
							title={isEditing ? `Make Changes to ${inputToEdit?.name}'s details` : "Add new entry"}
							onClick={() => form2.handleSubmit(onAddOrEditEntry)()}
						>
							<span className="sr-only">
								{isEditing ? `Make Changes to ${inputToEdit?.name}'s details` : "Add new entry"}
							</span>
							{isEditing ? (
								<>
									<EditIcon />
									Edit Entry
								</>
							) : (
								<>
									<PlusIcon />
									Add Entry
								</>
							)}
						</Button>
					</ButtonGroup>
				</TableCell>
			</TableRow>
		</Form>
	);
}
