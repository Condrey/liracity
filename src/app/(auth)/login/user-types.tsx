"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import { useSearchParams } from "next/navigation";
import StaffLogin from "./(staff-login)/staff-login";
import UserLogin from "./(user-login)/user-login";

export default function UserTypes() {
	const searchParams = useSearchParams();
	const user = searchParams.get("user");
	const { updateSearchParamsAndNavigate } = useCustomSearchParams();
	const users: { user: string; label: string }[] = [
		{ user: "civilian", label: "Civilian Login" },
		{ user: "staff", label: "Staff Member Login" }
	];
	return (
		<Tabs defaultValue={user || "civilian"}>
			<TabsList className="w-full *:flex-1">
				{users.map((u) => {
					return (
						<TabsTrigger value={u.user} key={u.user} onClick={() => updateSearchParamsAndNavigate(`user`, u.user)}>
							{u.label}
						</TabsTrigger>
					);
				})}
			</TabsList>
			<p className="w-full text-start text-xs text-muted-foreground italic">
				Choose the kind of user type below, either staff or civilian
			</p>
			<TabsContent
				value="civilian"
				className="mt-6 rounded-md md:bg-primary/5 md:px-3 md:py-5 md:backdrop-blur-2xl dark:md:border dark:md:bg-secondary"
			>
				<h1 className="hidden w-full text-center text-xl text-muted-foreground sm:block">Civilian Login</h1>
				<UserLogin />
			</TabsContent>
			<TabsContent
				value="staff"
				className="mt-6 rounded-md md:bg-primary/5 md:px-3 md:py-5 md:backdrop-blur-2xl dark:md:border dark:md:bg-secondary"
			>
				<h1 className="hidden w-full text-center text-xl text-muted-foreground sm:block">Staff Member Login</h1>
				<StaffLogin />
			</TabsContent>
		</Tabs>
	);
}
