import { NavigationMenu, NavigationMenuItem, NavigationMenuList } from "@/components/ui/navigation-menu";

import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn, webName } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import LoginUserInfo from "./login-user-info";
import TopAppBarBigScreen from "./top-app-bar/top-app-bar-big-screen";

export default async function TopAppBar({ className }: { className?: string }) {
	return (
		<NavigationMenu
			viewport={false}
			className={cn(
				"w-full h-12  flex justify-between shrink-0 items-center  gap-2 transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12",
				className
			)}
		>
			<NavigationMenuList className="flex gap-3 flex-wrap   ">
				{/* For small screens : section */}
				<div className="flex items-center md:hidden  gap-2">
					<SidebarTrigger className="-ml-1 " />
					<Separator orientation="vertical" className="mr-2 h-4" />
					<h2 className="  uppercase">{webName}</h2>
				</div>

				{/* Logo area  */}
				<NavigationMenuItem className="xl:block hidden shrink-0">
					<Link href={"/"} passHref>
						<Image src={`/logo.png`} height={50} width={50} alt="logo" />
					</Link>
				</NavigationMenuItem>

				{/* Big screen section: Navigation menu links  */}
				<TopAppBarBigScreen />
			</NavigationMenuList>
			<NavigationMenuList>
				{/* login information area  */}
				<LoginUserInfo />
			</NavigationMenuList>
		</NavigationMenu>
	);
}
