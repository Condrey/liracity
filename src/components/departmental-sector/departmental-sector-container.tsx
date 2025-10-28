"use client";

import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Item, ItemActions, ItemContent, ItemDescription, ItemHeader, ItemTitle } from "@/components/ui/item";
import LoadingButton from "@/components/ui/loading-button";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { DepartmentalSectorData } from "@/lib/types";
import { formatNumber } from "@/lib/utils";
import Link from "next/link";
import { useTransition } from "react";
import UserAvatar from "../ui/user-avatar";
import DropDownMenuDepartmentalSector from "./drop-down-menu-departmental-sector";

interface DepartmentalSectorContainerProps {
	departmentalSector: DepartmentalSectorData;
}
export default function DepartmentalSectorContainer({ departmentalSector: sector }: DepartmentalSectorContainerProps) {
	const numberOfStaffs = sector._count.employees;
	const [isPending, startTransition] = useTransition();
	const { getNavigationLinkWithoutUpdate } = useCustomSearchParams();
	const href = getNavigationLinkWithoutUpdate(`/${sector.id}`);
	// include avatar of at least 3 available staffs
	return (
		<Item variant={"muted"} className="font-semibold border p-2 rounded-md ">
			<ItemHeader>
				<div>
					<ItemTitle className='capitalize w-full tracking-tight sm:after:content-["_sector"]'>{sector.name}</ItemTitle>
					<ItemDescription>
						<span className="font-normal text-sm capitalize">
							{!numberOfStaffs ? (
								"No staff added yet"
							) : (
								<div className="flex items-center gap-1.5">
									<div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
										{sector.employees.slice(0, 7).map((staff) => (
											<UserAvatar avatarUrl={staff.user.avatarUrl} size={24} />
										))}
									</div>
									<span> {`${formatNumber(numberOfStaffs)} staff${numberOfStaffs === 1 ? "" : "s"}`}</span>
								</div>
							)}
						</span>
					</ItemDescription>
				</div>
				<DropDownMenuDepartmentalSector
					sector={sector}
					className="w-fit min-w-fit shrink-0 flex-none flex  float-right"
				/>
			</ItemHeader>
			<ItemContent>
				{sector.description && (
					<ItemDescription>
						<TipTapViewer className="text-justify hyphens-auto" content={sector.description} />
					</ItemDescription>
				)}
				<ItemActions>
					<LoadingButton
						onClick={() => startTransition(() => {})}
						loading={isPending}
						className="w-full max-w-fit ms-auto my-2"
						asChild
					>
						<Link href={href}>View more</Link>
					</LoadingButton>
				</ItemActions>
			</ItemContent>
		</Item>
	);
}
