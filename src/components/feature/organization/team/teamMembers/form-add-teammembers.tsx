"use client";

import { Button } from "@/components/ui/button";
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
import TableRowInputMember from "../../members/table-row-input-member";
import TableRowViewMember from "../../members/table-row-view-member";
import { useAddTeamMemberMutation } from "./mutation";

interface Props {
	organizationId: string;
	teamId: string;
	organizationName: string;
	teamName: string;
	open: boolean;
	setOpen: (open: boolean) => void;
}

export default function FormAddTeamMembers({
	organizationId,
	organizationName,
	teamId,
	teamName,
	open,
	setOpen
}: Props) {
	const { mutate, isPending, error } = useAddTeamMemberMutation();
	const form = useForm<MultipleMembersSignUpSchema>({
		resolver: zodResolver(multipleMembersSignUpSchema),
		values: {
			members: []
		}
	});
	const entries = form.watch("members") || [];
	const numberOfEntries = entries.length;

	async function submitEmail(input: MultipleMembersSignUpSchema) {
		mutate({ input, teamId }, { onSuccess: () => setOpen(false) });
	}

	return (
		<Sheet open={open} onOpenChange={setOpen}>
			<SheetContent side="top" className="h-dvh">
				<SheetHeader>
					<SheetTitle className="uppercase">{`Add ${teamName} section member(s)`}</SheetTitle>
					<SheetDescription>{`The entry shall be added to ${teamName} section under ${organizationName} department.`}</SheetDescription>
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
