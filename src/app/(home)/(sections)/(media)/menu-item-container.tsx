import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { SidebarMenuButton, SidebarMenuItem, SidebarMenuSub } from "@/components/ui/sidebar";
import { SideBarItem } from "@/lib/types";
import { ChevronRightIcon } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { SubmenuItemContainer } from "./sub-menu-item-container";

export default function MenuItemContainer({ item }: { item: SideBarItem }) {
	const Icon = item.icon!;
	const searchParams = useSearchParams();
	const subItems = item.items;
	if (!subItems) {
		return null;
	}

	const hasChildActive = subItems.slice(1).some((subItem) => searchParams.get(item.filter) === subItem.paramValue);
	const isInitialActive = !hasChildActive;

	return (
		<>
			<Collapsible asChild defaultOpen={item.isActive} className="group/collapsible">
				<SidebarMenuItem>
					<CollapsibleTrigger asChild>
						<SidebarMenuButton tooltip={item.title}>
							{item.icon && <Icon />}
							<span>{item.title}</span>
							<ChevronRightIcon className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
						</SidebarMenuButton>
					</CollapsibleTrigger>
					<CollapsibleContent>
						<SidebarMenuSub>
							<SubmenuItemContainer item={item} subItem={subItems[0]} isActive={isInitialActive} />
							{subItems.slice(1).map((subItem) => {
								const filter = searchParams.get(item.filter);
								const isActive = filter === subItem.paramValue;
								return <SubmenuItemContainer key={subItem.title} item={item} subItem={subItem} isActive={isActive} />;
							})}
						</SidebarMenuSub>
					</CollapsibleContent>
				</SidebarMenuItem>
			</Collapsible>
		</>
	);
}
