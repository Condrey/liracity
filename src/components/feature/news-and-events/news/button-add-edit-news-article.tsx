"use client";

import { Button, ButtonProps } from "@/components/ui/button";
import { Role } from "@/generated/prisma/enums";
import { myPrivileges } from "@/lib/enums";
import { useSession } from "@/lib/session-provider";
import { NewsArticleData } from "@/lib/types";
import { useState } from "react";
import SheetAddEditNewsArticle from "./form/sheet-add-edit-news-article";

interface ButtonAddEditNewsArticleProps extends ButtonProps {
	newsArticle?: NewsArticleData;
}

export default function ButtonAddEditNewsArticle({ newsArticle, ...props }: ButtonAddEditNewsArticleProps) {
	const [open, setOpen] = useState(false);
	const altId = Date.now().toString();
	const { user } = useSession();
	const userId = user?.id;
	const canUpsert = !!user && myPrivileges[user.role as Role].includes("MODERATOR");

	return (
		<>
			{!!canUpsert && (
				<Button
					title={newsArticle ? "Edit the news article" : "Add news article"}
					onClick={() => setOpen(true)}
					{...props}
				/>
			)}
			<SheetAddEditNewsArticle open={open} setOpen={setOpen} newsArticle={newsArticle} userId={userId} altId={altId} />
		</>
	);
}
