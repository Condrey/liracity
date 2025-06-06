"use client";

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn, webName } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarRail,
} from "../ui/sidebar";
import { navLinks } from "./constants";
import { NavUser } from "./nav-user";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  return (
    <Sidebar className="md:hidden" collapsible="icon"  {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton className="flex flex-col  w-full  h-fit  data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground items-center justify-center rounded-lg bg-sidebar text-sidebar-foreground">
              <div className="flex flex-col items-center aspect-square size-[160px]  ">
                <Image src={"/logo.png"} alt="logo" width={150} height={150} />
                              <span className="text-xl uppercase tracking-tight">{webName}</span>

              </div>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation Menu</SidebarGroupLabel>
          <SidebarMenu>
            {navLinks.map((item, index) => {
              const ItemIcon = item.icon!;
              const isActive = item.children.some((i) =>
                pathname.startsWith(i.href)
              );
              return (
                <Collapsible
                  key={item.title}
                  defaultOpen={index === 1}
                  asChild
                  className="group/collapsible"
                >
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton
                        tooltip={item.title}
                        isActive={isActive}
                        //  asChild
                      >
                        {/* <Link href={basePathname+'/'+item.url+'?'+searchParams.toString()}> */}
                        {item.icon && <ItemIcon />}
                        <span
                          className={cn(
                            isActive && "font-semibold",
                            "line-clamp-1 text-ellipsis break-words"
                          )}
                        >
                          {item.title}
                        </span>
                        <ChevronRight
                          className={cn(
                            "ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90",
                            index === 0 && "hidden"
                          )}
                        />
                        {/* </Link> */}
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    {item.children?.length ? (
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {item.children.map((item) => (
                            <SidebarMenuSubItem key={item.title}>
                              <SidebarMenuSubButton
                                title={item.description}
                                asChild
                                // isActive={item.isActive}
                              >
                                <Link href={item.href} className="h-fit py-1">
                                  {item.title}
                                </Link>
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    ) : null}
                  </SidebarMenuItem>
                </Collapsible>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <NavUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
