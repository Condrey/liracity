import { SidebarTrigger } from "@/components/ui/sidebar";
import { cn, webName } from "@/lib/utils";
import UserMenuButton from "@/utils/user-menu-button";
import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import TopAppBarBigScreen from "./top-app-bar-big-screen";

export default async function TopAppBar({ className }: { className?: string }) {
	return (
		<div className={cn("z-50 flex h-12 w-full shrink-0 items-center justify-between gap-2", className)}>
			{/* For small screens : section */}
			<div className="flex items-center gap-2 md:hidden">
				<SidebarTrigger variant={"default"} className="-ml-1">
					<MenuIcon />
				</SidebarTrigger>
				<Link href={"/"} passHref className="cursor-pointer">
					<h2 className="uppercase">{webName}</h2>
				</Link>
			</div>

			{/* Logo area: For XL screens  */}
			<div className="hidden shrink-0 xl:block">
				<Link href={"/"} passHref>
					<Image src={`/logo.png`} height={50} width={50} alt="logo" />
				</Link>
			</div>

			{/* Big screen section: Navigation menu links  */}
			<div className="hidden flex-1 md:flex">
				<TopAppBarBigScreen />
			</div>

			{/* login information area  */}
			<UserMenuButton />
		</div>
	);
}
