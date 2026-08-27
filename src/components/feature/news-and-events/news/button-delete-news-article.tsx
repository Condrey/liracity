"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogFooter,
	DialogHeader,
	DialogTitle
} from "@/components/ui/dialog";
import LoadingButton from "@/components/ui/loading-button";
import { Role } from "@/generated/prisma/enums";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { NewsArticleData } from "@/lib/types";
import { AlertTriangleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDeleteNewsArticleMutation } from "./form/mutation";

interface ButtonDeleteNewsArticleProps extends ButtonProps {
	newsArticle: NewsArticleData;
}

export default function ButtonDeleteNewsArticle({ newsArticle, variant, ...props }: ButtonDeleteNewsArticleProps) {
	const [open, setOpen] = useState(false);
	const { user } = useSession();
	const canDelete = !!user && myPrivileges[user.role as Role].includes("MODERATOR");

	return (
		<>
			{canDelete && (
				<Button
					onClick={() => setOpen(true)}
					variant={variant || "destructive"}
					title="Delete this news article"
					{...props}
				/>
			)}
			<DeleteNewsArticleDialog open={open} setOpen={setOpen} newsArticle={newsArticle} />
		</>
	);
}

interface DeleteNewsArticleDialogProps {
	newsArticle: NewsArticleData;
	open: boolean;
	setOpen: (open: boolean) => void;
}
export function DeleteNewsArticleDialog({ newsArticle, open, setOpen }: DeleteNewsArticleDialogProps) {
	const { mutate, isPending } = useDeleteNewsArticleMutation();
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const router = useRouter();
	function handleDelete() {
		mutate(newsArticle.id, {
			onSuccess: () => setOpen(false),
			onSettled: () => {
				const url = getNavigationLinkWithPathnameWithoutUpdate("/media/news-events");
				router.push(url);
			}
		});
	}
	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogContent>
				<DialogHeader>
					<DialogTitle className="text-destructive">
						<AlertTriangleIcon
							className="mr-2 inline size-10 fill-destructive text-destructive-foreground"
							strokeWidth={0.8}
						/>
						<span className="line-clamp-1 text-ellipsis uppercase">Delete {newsArticle.title} newsArticle</span>
					</DialogTitle>
					<DialogDescription>Dangerous! Please note that this action is irreversible</DialogDescription>
				</DialogHeader>
				<p>
					This will delete{" "}
					<strong>
						{newsArticle.title.length > 30 ? `${newsArticle.title.substring(0, 30)}...` : newsArticle.title}
					</strong>{" "}
					news article and all its information from the database. Continue with caution.
				</p>
				<DialogFooter>
					<Button variant={"outline"} onClick={() => setOpen(false)}>
						Cancel
					</Button>
					<LoadingButton loading={isPending} variant={"destructive"} onClick={handleDelete}>
						Continue
					</LoadingButton>
				</DialogFooter>
			</DialogContent>
		</Dialog>
	);
}
