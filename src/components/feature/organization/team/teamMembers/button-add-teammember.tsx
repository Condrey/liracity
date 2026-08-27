"use client";

import { NumberInput } from "@/components/number-input/number-input";
import { Button, ButtonProps } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/ui/loading-button";
import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue
} from "@/components/ui/select";
import { Role } from "@/generated/prisma/enums";
import { memberSignUpSchema, MemberSignUpSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useAddMemberMutation } from "./mutation";

interface Props extends ButtonProps {
	organizationId: string;
}

export default function ButtonAddMember({ organizationId, ...props }: Props) {
	const [open, setOpen] = useState(false);

	const { mutate, isPending, error } = useAddMemberMutation();
	const form = useForm<MemberSignUpSchema>({
		resolver: zodResolver(memberSignUpSchema),
		values: {
			email: "",
			name: "",
			ippsNumber: null,
			organizationId: organizationId || "",
			role: Role.STAFF
		}
	});
	async function submitEmail(input: MemberSignUpSchema) {
		mutate(input, { onSuccess: () => setOpen(false) });
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button type="button" title={"Add member"} onClick={() => setOpen(true)} {...props} />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Add a member</DialogTitle>
					<DialogDescription>{`Enter the member's name and email here below;`}</DialogDescription>
				</DialogHeader>
				<Form {...form}>
					<span>{organizationId}</span>
					<form onSubmit={form.handleSubmit(submitEmail)} className="space-y-4">
						<FormField
							control={form.control}
							name="name"
							render={({ field }) => (
								<FormItem>
									<FormLabel required>Full name</FormLabel>
									<FormControl>
										<Input {...field} placeholder="e.g., John Doe" />
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
									<FormLabel required>Email</FormLabel>
									<FormControl>
										<Input type="email" {...field} placeholder="e.g., someone@gmail.com" />
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="ippsNumber"
							render={({ field }) => (
								<FormItem>
									<FormLabel>Ipps Number</FormLabel>
									<FormControl>
										<NumberInput placeholder="e.g., 1810923 or 00181093" {...field} value={field.value!} />
									</FormControl>
									<FormMessage />
									<FormDescription>The leading zeros (0000...) do not matter</FormDescription>
								</FormItem>
							)}
						/>
						<FormField
							control={form.control}
							name="role"
							render={({ field }) => (
								<FormItem>
									<FormLabel required>Role</FormLabel>
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
						{error && (
							<div role="alert" className="text-destructive">
								{error.message}
							</div>
						)}
						<DialogFooter>
							<LoadingButton loading={isPending} type="submit">
								Submit
							</LoadingButton>
						</DialogFooter>
					</form>
				</Form>
			</DialogContent>
		</Dialog>
	);
}
