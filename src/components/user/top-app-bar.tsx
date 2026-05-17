import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn, webName } from "@/lib/utils";
import UserMenuButton from "@/utils/user-menu-button";
import Image from "next/image";
import Link from "next/link";
import TopAppBarBigScreen from "./top-app-bar/top-app-bar-big-screen";

export default async function TopAppBar({ className }: { className?: string }) {
	return (
		<NavigationMenu
			viewport={false}
			className={cn(
				"flex h-12 w-full shrink-0 items-center justify-between gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12",
				className
			)}
		>
			<NavigationMenuList className="flex flex-wrap gap-3">
				{/* For small screens : section */}
				<div className="flex items-center gap-2 md:hidden">
					<SidebarTrigger className="-ml-1" />
					<Link href={"/"} passHref className="cursor-pointer">
						<h2 className="uppercase">{webName}</h2>
					</Link>
				</div>

				{/* Logo area  */}
				<NavigationMenuItem className="hidden shrink-0 xl:block">
					<Link href={"/"} passHref>
						<Image src={`/logo.png`} height={50} width={50} alt="logo" />
					</Link>
				</NavigationMenuItem>

				{/* Big screen section: Navigation menu links  */}
				<TopAppBarBigScreen />
			</NavigationMenuList>
			<NavigationMenuList>
				{/* login information area  */}
				<UserMenuButton />
			</NavigationMenuList>
		</NavigationMenu>
	);
}
