import { MinusIcon, PlusIcon } from "lucide-react";
import { Sidebar, SidebarContent, SidebarGroup, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarMenuSub, SidebarMenuSubButton, SidebarMenuSubItem } from "../ui/sidebar";
import { navLinks } from "./constants";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
    return <Sidebar {...props}>
<SidebarHeader>
    <SidebarMenu>
        <SidebarMenuItem></SidebarMenuItem>
    </SidebarMenu>
</SidebarHeader>
<SidebarContent>
    <SidebarGroup>
        <SidebarMenu>
            {
                navLinks.map((item,index)=> ( <Collapsible
                key={item.title}
                defaultOpen={index === 1}
                className="group/collapsible"
              >
                   <SidebarMenuItem>
                  <CollapsibleTrigger asChild>
                    <SidebarMenuButton>
                      {item.title}{" "}
                      <PlusIcon className="ml-auto group-data-[state=open]/collapsible:hidden" />
                      <MinusIcon className="ml-auto group-data-[state=closed]/collapsible:hidden" />
                    </SidebarMenuButton>
                  </CollapsibleTrigger>
                  {item.children?.length ? (
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {item.children.map((item) => (
                          <SidebarMenuSubItem key={item.title}>
                            <SidebarMenuSubButton
                              asChild
                              // isActive={item.isActive}
                            >
                              {/* <a href={item.url}>{item.title}</a> */}
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  ) : null}
                </SidebarMenuItem>
            </Collapsible>))
            }
        </SidebarMenu>
    </SidebarGroup>
</SidebarContent>
    </Sidebar>
}