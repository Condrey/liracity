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
    { user: "staff", label: "Staff Member Login" },
  ];
  return (
    <Tabs defaultValue={user || "civilian"}>
      <TabsList className="w-full *:flex-1 ">
        {users.map((u) => {
          return (
            <TabsTrigger
              value={u.user}
              onClick={() => updateSearchParamsAndNavigate(`user`, u.user)}
            >
              {u.label}
            </TabsTrigger>
          );
        })}
      </TabsList>
      <p className="text-muted-foreground text-start w-full text-xs italic">
              Choose the kind of user type below, either staff or civilian
            </p>
      <TabsContent value="civilian" >
        <h1 className="text-muted-foreground text-xl w-full text-center py-4 hidden sm:block">
          Civilian Login
        </h1>
        <UserLogin />
      </TabsContent>
      <TabsContent value="staff">
        <h1 className="text-muted-foreground text-xl w-full text-center py-4 hidden sm:block">
          Staff Member Login
        </h1>
        <StaffLogin />
      </TabsContent>
    </Tabs>
  );
}
