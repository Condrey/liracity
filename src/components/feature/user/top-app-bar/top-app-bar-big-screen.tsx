"use client";

import { NavigationMenu, NavigationMenuList } from "@/components/ui/navigation-menu";
import { navLinks } from "@/lib/constants";
import { NavigationMenuItemContent } from "./top-app-bar-nav-item";

export default function TopAppBarBigScreen() {
	return (
		<NavigationMenu>
			<NavigationMenuList>
				{navLinks?.map((nav, index, array) => {
					return <NavigationMenuItemContent key={nav.href} nav={nav} />;
				})}
			</NavigationMenuList>
		</NavigationMenu>
	);
}
