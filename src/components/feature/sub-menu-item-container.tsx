import { SidebarMenuSubButton, SidebarMenuSubItem } from "@/components/ui/sidebar";
import { Spinner } from "@/components/ui/spinner";
import { SideBarItem, SideBarSubItem } from "@/lib/types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useTransition } from "react";

export function SubmenuItemContainer({
	item,
	subItem,
	isActive
}: {
	item: SideBarItem;
	subItem: SideBarSubItem;
	isActive: boolean;
}) {
	const [isPending, startTransition] = useTransition();
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const router = useRouter();

	const params = new URLSearchParams(searchParams.toString());

	function handleClick() {
		startTransition(() => {
			params.set(item.filter, subItem.paramValue!);
			router.push((!pathname ? "" : pathname) + "?" + params.toString());
		});
	}

	return (
		<SidebarMenuSubItem key={subItem.title}>
			<SidebarMenuSubButton isActive={isActive} onClick={handleClick}>
				{isPending && <Spinner />}
				<span>{subItem.title}</span>
			</SidebarMenuSubButton>
		</SidebarMenuSubItem>
	);
}
