"use client";

import { Form, FormField, FormItem, FormLabel, FormControl, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import { IggDeclaration } from "@/generated/prisma/client";
import { iggDeclarationSchema, IGGDeclarationSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useUpsertIggDeclarationMutation } from "./mutation";

interface Props {
	iggDeclarationToEdit?: IggDeclaration;
	setOpen?: (open: boolean) => void;
}

export default function FormAddEditIGGDeclaration({ iggDeclarationToEdit, setOpen }: Props) {
	const form = useForm<IGGDeclarationSchema>({
		resolver: zodResolver(iggDeclarationSchema),
		defaultValues: {
			id: iggDeclarationToEdit?.id || "",
			email: iggDeclarationToEdit?.email || "",
			name: iggDeclarationToEdit?.name || "",
			nin: iggDeclarationToEdit?.nin || "",
			phoneNumber: iggDeclarationToEdit?.phoneNumber || "",
			title: iggDeclarationToEdit?.title || ""
		}
	});
	const { isPending, mutate, error } = useUpsertIggDeclarationMutation();

	function submitForm(input: IGGDeclarationSchema) {
		mutate(input, {
			onSuccess: () => {
				setOpen?.(false);
				form.reset();
			}
		});
	}
	return (
		<Form {...form}>
			<form onSubmit={form.handleSubmit(submitForm)} className="space-y-4">
				<FormField
					control={form.control}
					name="name"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Full name</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="title"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Job Title</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="phoneNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Phone Number</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="email"
					render={({ field }) => (
						<FormItem>
							<FormLabel>Email</FormLabel>
							<FormControl>
								<Input type="email" {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="nin"
					render={({ field }) => (
						<FormItem>
							<FormLabel>National ID Number (NIN)</FormLabel>
							<FormControl>
								<Input {...field} />
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				{error && (
					<div className="bg-destructive/20 p-2 text-sm text-destructive">
						{error.message.includes("Unique constraint")
							? "Either email, NIN, contact, entered already belongs to someone in this database"
							: error.message}
					</div>
				)}

				<LoadingButton loading={isPending} size="lg" className="mx-auto mt-6 w-full max-w-md" type="submit">
					Submit Details
				</LoadingButton>
			</form>
		</Form>
	);
}
