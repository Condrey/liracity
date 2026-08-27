"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { DialogFooter } from "@/components/ui/dialog";
import { Form } from "@/components/ui/form";
import LoadingButton from "@/components/ui/loading-button";
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Table, TableBody, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { formatNumber } from "@/lib/utils";
import { MemberSignUpSchema, multipleMembersSignUpSchema, MultipleMembersSignUpSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { XIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import { useAddMemberMutation } from "./mutation";
import TableRowInputMember from "./table-row-input-member";
import TableRowViewMember from "./table-row-view-member";

interface Props extends ButtonProps {
	organizationId: string;
	open: boolean;
	setOpen: (open: boolean) => void;
}

export default function FormAddMembers({ organizationId, open, setOpen, ...props }: Props) {
	const { mutate, isPending, error } = useAddMemberMutation();
	const form = useForm<MultipleMembersSignUpSchema>({
		resolver: zodResolver(multipleMembersSignUpSchema),
		values: {
			members: []
		}
	});
	const entries = form.watch("members") || [];
	const numberOfEntries = entries.length;

	async function submitEmail(input: MultipleMembersSignUpSchema) {
		mutate(input, { onSuccess: () => setOpen(false) });
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetContent side="top" className="h-dvh">
				<SheetHeader>
					<SheetTitle>Add a member</SheetTitle>
					<SheetDescription>{`Enter the member's name and email here below;`}</SheetDescription>
				</SheetHeader>
				{/* <pre>{JSON.stringify(entries, null, 2)}</pre> */}
				<Form {...form}>
					<form onSubmit={form.handleSubmit(submitEmail)} className="space-y-4 px-4">
						<Table className="">
							<TableHeader>
								<TableRow className="bg-warning *:border dark:bg-warning-foreground">
									<TableHead>No.</TableHead>
									<TableHead>Full Name</TableHead>
									<TableHead>Email</TableHead>
									<TableHead>Ipps Number</TableHead>
									<TableHead>Role</TableHead>
									<TableHead>Actions</TableHead>
								</TableRow>
							</TableHeader>

							<TableBody>
								{numberOfEntries > 0 &&
									entries.map((entry, index) => {
										return (
											<TableRowViewMember form={form} index={index} member={entry as MemberSignUpSchema} key={index} />
										);
									})}
								<TableRowInputMember
									form={form}
									index={numberOfEntries}
									organizationId={organizationId}
									isEditing={false}
									onInputSubmitted={() => {}}
								/>
							</TableBody>
						</Table>
						{error && (
							<div role="alert" className="text-destructive">
								{error.message ?? form.formState.errors.members}
							</div>
						)}
						<DialogFooter>
							<Button type="button" variant={"destructive"} title="Reset whole table" onClick={() => form.reset()}>
								<span className="sr-only">Reset whole table</span>
								<XIcon />
								Reset Whole List
							</Button>
							<LoadingButton loading={isPending} type="submit">
								{!!numberOfEntries ? (
									<span>{`Submit the ${formatNumber(numberOfEntries)} ${numberOfEntries === 1 ? "entry" : "entries"}`}</span>
								) : (
									<span>Submit entries</span>
								)}
							</LoadingButton>
						</DialogFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
