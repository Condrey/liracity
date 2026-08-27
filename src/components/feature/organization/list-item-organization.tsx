"use client";
import { Item, ItemDescription, ItemFooter, ItemHeader, ItemMedia, ItemTitle } from "@/components/ui/item";
import { Organization } from "@/generated/prisma/client";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { LINK_DEPARTMENTS } from "@/lib/constants";
import { formatDate } from "date-fns";
import { Building2Icon, HistoryIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import { Spinner } from "../../ui/spinner";

export function ListItemOrganization({
	organization: { name, slug, createdAt, updatedAt, logo }
}: {
	organization: Organization;
}) {
	const [isPending, startTransition] = useTransition();
	const isUpdate = updatedAt.toString() !== createdAt.toString();
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const url = getNavigationLinkWithPathnameWithoutUpdate(`${LINK_DEPARTMENTS}/${slug}`);
	return (
		<Item variant={"muted"} asChild>
			<Link href={url} onClick={() => startTransition(() => {})}>
				<ItemHeader>
					<div>
						<ItemTitle>{name}</ItemTitle>
						<ItemDescription>Slug: {slug}</ItemDescription>
					</div>

					<ItemMedia variant={logo ? "image" : "icon"}>
						{isPending ? (
							<Spinner />
						) : (
							<>
								{!logo ? (
									<Building2Icon className="" strokeWidth={0.5} />
								) : (
									<Image height={500} width={500} alt="logo" src={logo} />
								)}
							</>
						)}
					</ItemMedia>
				</ItemHeader>

				<ItemFooter className="flex-col items-start text-xs text-muted-foreground">
					<span>
						<HistoryIcon className="mr-1 inline size-3.5" />
						{isUpdate ? <span>{formatDate(updatedAt, "PPP")} (Updated)</span> : formatDate(createdAt, "PPP")}
					</span>
				</ItemFooter>
			</Link>
		</Item>
	);
}
