"use client";
import { Item, ItemDescription, ItemFooter, ItemHeader, ItemMedia, ItemTitle } from "@/components/ui/item";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { LINK_DEPARTMENTS } from "@/lib/constants";
import { OrganizationData } from "@/lib/types";
import { cn, formatNumber } from "@/lib/utils";
import { Building2Icon, Users2Icon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import { Spinner } from "../../ui/spinner";

export function ListItemOrganization({
	organization: {
		name,
		slug,

		logo,
		_count: { teams: numberOfTeams, members: numberOfMembers }
	}
}: {
	organization: OrganizationData;
}) {
	const [isPending, startTransition] = useTransition();
	const { getNavigationLinkWithPathnameWithoutUpdate } = useCustomSearchParams();
	const url = getNavigationLinkWithPathnameWithoutUpdate(`${LINK_DEPARTMENTS}/${slug}`);
	return (
		<Item variant={"muted"} asChild>
			<Link href={url} onClick={() => startTransition(() => {})}>
				<ItemHeader>
					<div>
						<ItemTitle>{name}</ItemTitle>
						<ItemDescription>
							{numberOfTeams < 1
								? "Has no section"
								: `Has ${formatNumber(numberOfTeams)} section${numberOfTeams === 1 ? "" : "s"}`}
						</ItemDescription>
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
					<span
						className={cn(
							"rounded-xl px-2 py-1 font-semibold",
							!numberOfMembers
								? "bg-destructive/10 text-destructive *:text-destructive"
								: "bg-success/10 text-success *:text-success"
						)}
					>
						<Users2Icon className="mr-1 inline size-3.5" />
						{!numberOfMembers
							? "Has no members added yet"
							: `${formatNumber(numberOfMembers)} member${numberOfMembers === 1 ? "" : "s"}.`}
					</span>
				</ItemFooter>
			</Link>
		</Item>
	);
}
