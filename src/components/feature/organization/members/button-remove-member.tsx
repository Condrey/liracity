"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import {
	Dialog,
	DialogClose,
	DialogContent,
	DialogFooter,
	DialogHeader,
	DialogTitle,
	DialogTrigger
} from "@/components/ui/dialog";
import { Item, ItemContent, ItemDescription, ItemTitle } from "@/components/ui/item";
import LoadingButton from "@/components/ui/loading-button";
import UserAvatar from "@/components/ui/user-avatar";
import { MemberData } from "@/lib/types";
import { useState } from "react";
import { useRemoveMemberMutation } from "./mutation";

interface Props extends ButtonProps {
	member: MemberData;
}
export default function ButtonRemoveMember({ member, ...props }: Props) {
	const { user, organizationId, id, role, organization } = member;
	const [open, setOpen] = useState(false);

	const { mutate, isPending, error } = useRemoveMemberMutation();

	async function removeMember() {
		mutate(
			{ memberIdOrEmail: id, organizationId },
			{
				onSuccess() {
					setOpen(false);
				}
			}
		);
	}

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button type="button" title={"Remove member"} onClick={() => setOpen(true)} {...props} />
			</DialogTrigger>
			<DialogContent>
				<DialogHeader>
					<DialogTitle>Remove {role}</DialogTitle>
				</DialogHeader>

				<div className="space-y-4">
					<Item variant={"muted"} className="rounded-xl bg-foreground/80 text-background">
						<UserAvatar image={user.image} />
						<ItemContent className="flex flex-col gap-0.5">
							<ItemTitle className="space-x-4">{user.name}</ItemTitle>
							<ItemDescription className="text-xs text-background">{user.email}</ItemDescription>
						</ItemContent>
					</Item>
					<span>
						{`This action shall remove this user from this ${organization.name} department and not affect other information.`}
					</span>
					{error && (
						<div role="alert" className="text-destructive">
							{error.message}
						</div>
					)}
				</div>
				<DialogFooter>
					<DialogClose asChild>
						<Button variant={"secondary"}>Close</Button>
					</DialogClose>
					<LoadingButton loading={isPending} type="button" variant="destructive" onClick={removeMember}>
						Confirm
					</LoadingButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
