"use client";

import { navLinks } from "../../../lib/constants";
import { NavigationMenuItemContent } from "./top-app-bar-nav-item";

export default function TopAppBarBigScreen() {
	return (
		<>
			{navLinks?.map((nav, index, array) => {
				return <NavigationMenuItemContent key={nav.href} nav={nav} index={index} array={array} />;
			})}
		</>
	);
}
