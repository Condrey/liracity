"use client";

import LoadingButton from "@/components/ui/loading-button";
import { Tag } from "@/generated/prisma";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import Link from "next/link";
import { useTransition } from "react";

export default function HashtagItem({ hashtag: t }: { hashtag: Tag }) {
	const [isPending, startTransition] = useTransition();
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();

	return (
		<Link key={t.id} href={getNavigationLinkWithPathnameWithoutUpdate(`/media/news-events/news/hashtag/${t.name}`)}>
			<LoadingButton
				loading={isPending}
				onClick={() => startTransition(() => {})}
				variant={"secondary"}
				className="font-extrabold"
			>
				#{t.name}
			</LoadingButton>
		</Link>
	);
}
