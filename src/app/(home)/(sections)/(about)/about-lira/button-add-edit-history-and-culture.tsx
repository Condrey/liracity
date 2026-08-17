"use client";

import { useSession } from "@/app/session-provider";
import TipTapEditorWithHeader from "@/components/tip-tap-editor/tip-tap-editor-with-header";
import { Button, ButtonProps } from "@/components/ui/button";
import { Form, FormControl, FormField, FormFooter, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import LoadingButton from "@/components/ui/loading-button";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";
import { cn } from "@/lib/utils";
import { singleContentSchema, SingleContentSchema } from "@/lib/validation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { useUpsertHistoryAndCultureMutation } from "./mutation";

interface ButtonAddEditHistoryAndCultureProps extends ButtonProps {
	historyAndCulture?: string;
}

export default function ButtonAddEditHistoryAndCulture({
	historyAndCulture,
	className,
	...props
}: ButtonAddEditHistoryAndCultureProps) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
	const isAuthorized = !!user && myPrivileges[user.role as Role].includes(Role.MODERATOR);

	return (
		<>
			{isAuthorized && (
				<Button
					onClick={() => setOpen(true)}
					title={historyAndCulture ? "Update historyAndCulture information" : "Create historyAndCulture information"}
					className={cn("", className)}
					{...props}
				/>
			)}
			<FormAddEditHistoryAndCulture open={open} setOpen={setOpen} historyAndCulture={historyAndCulture} />
		</>
	);
}

interface FormAddEditHistoryAndCultureProps {
	open: boolean;
	setOpen: (open: boolean) => void;
	historyAndCulture?: string;
}
export function FormAddEditHistoryAndCulture({ open, setOpen, historyAndCulture }: FormAddEditHistoryAndCultureProps) {
	const { isPending, mutate } = useUpsertHistoryAndCultureMutation();
	const form = useForm<SingleContentSchema>({
		resolver: zodResolver(singleContentSchema),
		values: {
			singleContent: historyAndCulture || ""
		}
	});
	function handleSubmit(input: SingleContentSchema) {
		mutate(input, {
			onSuccess() {
				setOpen(false);
			}
		});
	}
	return (
		<Sheet open={open} onOpenChange={setOpen} modal>
			<SheetContent side="bottom">
				<SheetHeader>
					<SheetTitle>{historyAndCulture ? "Edit" : "Add"} history and culture</SheetTitle>
				</SheetHeader>
				<Form {...form}>
					<form onSubmit={form.handleSubmit(handleSubmit)} className="mx-auto w-full max-w-4xl space-y-4 px-3 pb-6">
						<FormField
							control={form.control}
							name="singleContent"
							render={({ field }) => (
								<FormItem>
									<FormLabel required>History and culture</FormLabel>
									<FormControl>
										<TipTapEditorWithHeader
											includeHeader
											value={field.value}
											onChange={field.onChange}
											className="max-h-fit"
										/>
									</FormControl>
									<FormMessage />
								</FormItem>
							)}
						/>
						<FormFooter>
							<LoadingButton loading={isPending}>{historyAndCulture ? "Update" : "Create"}</LoadingButton>
						</FormFooter>
					</form>
				</Form>
			</SheetContent>
		</Sheet>
	);
}
