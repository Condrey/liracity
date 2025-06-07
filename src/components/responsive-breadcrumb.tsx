"use client";

import Link from "next/link";
import * as React from "react";

import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useCustomSearchParams } from "@/hooks/use-custom-search-param";
import useMediaQuery from "@/hooks/use-media-query";
import { ResponsiveBreadcrumbItem } from "@/lib/types";
import { cn } from "@/lib/utils";
import LoadingButton from "./ui/loading-button";

const ITEMS_TO_DISPLAY = 3;

interface ResponsiveBreadcrumbProps {
  breadcrumbs: ResponsiveBreadcrumbItem[];
  itemsToDisplay?: number;
}
export function ResponsiveBreadcrumb({
  breadcrumbs: items,
  itemsToDisplay = ITEMS_TO_DISPLAY,
}: ResponsiveBreadcrumbProps) {
  const [open, setOpen] = React.useState(false);
  const [isPending, startTransition] = React.useTransition();
  const { getNavigationLinkWithPathnameWithoutUpdate } =
    useCustomSearchParams();

  const isDesktop = useMediaQuery("(min-width: 768px)");

  return (
    <Breadcrumb className="pt-3 pb-4">
      <BreadcrumbList>
        <BreadcrumbItem>
          <BreadcrumbLink asChild>
            <ResponsiveNavigationMenuLink
              url={items[0].href ?? "/"}
              label={items[0].label}
            />
          </BreadcrumbLink>
        </BreadcrumbItem>
        <BreadcrumbSeparator />
        {items.length > itemsToDisplay ? (
          <>
            <BreadcrumbItem>
              {isDesktop ? (
                <DropdownMenu open={open} onOpenChange={setOpen}>
                  <DropdownMenuTrigger
                    className="flex items-center gap-1"
                    aria-label="Toggle menu"
                    asChild
                  >
                    <LoadingButton
                      loading={isPending}
                      variant={"ghost"}
                      size={"icon"}
                    >
                      <BreadcrumbEllipsis className="size-4" />
                    </LoadingButton>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="start">
                    {items.slice(1, -2).map((item, index) => (
                      <DropdownMenuItem
                        key={index}
                        onClick={() => React.startTransition(() => {})}
                      >
                        <Link
                          href={getNavigationLinkWithPathnameWithoutUpdate(
                            item.href ? item.href : "#"
                          )}
                        >
                          {item.label}
                        </Link>
                      </DropdownMenuItem>
                    ))}
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <Drawer open={open} onOpenChange={setOpen}>
                  <DrawerTrigger aria-label="Toggle Menu" asChild>
                    <LoadingButton
                      loading={isPending}
                      variant={"ghost"}
                      size={"icon"}
                    >
                      <BreadcrumbEllipsis className="h-4 w-4" />
                    </LoadingButton>
                  </DrawerTrigger>
                  <DrawerContent>
                    <DrawerHeader className="text-left">
                      <DrawerTitle>Navigate to</DrawerTitle>
                      <DrawerDescription>
                        Select a page to navigate to.
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="grid gap-1 px-4">
                      {items.slice(1, -2).map((item, index) => (
                        <Link
                          key={index}
                          href={getNavigationLinkWithPathnameWithoutUpdate(
                            item.href ? item.href : "#"
                          )}
                          onClick={() => startTransition(() => {})}
                          className="py-1 text-sm"
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                    <DrawerFooter className="pt-4">
                      <DrawerClose asChild>
                        <Button variant="outline">Close</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </DrawerContent>
                </Drawer>
              )}
            </BreadcrumbItem>
            <BreadcrumbSeparator />
          </>
        ) : null}
        {items.slice(-itemsToDisplay + 1).map((item, index) => (
          <BreadcrumbItem key={index}>
            {item.href ? (
              <>
                <ResponsiveNavigationMenuLink
                  url={item.href}
                  label={item.label}
                  isActive={index === itemsToDisplay - 2}
                  className={cn(
                    "max-w-20 truncate md:max-w-none ",
                  )}
                />
                <BreadcrumbSeparator
                  className={cn(index === itemsToDisplay - 2 && "hidden")}
                />
              </>
            ) : (
               
              <ResponsiveNavigationMenuLink 
              className="max-w-20 truncate md:max-w-none "
              url="#"
              label={item.label}  isALink={false} isActive
              />
            )}
          </BreadcrumbItem>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}

interface ResponsiveNavigationMenuLinkProps {
  isALink?: boolean;
  url: string;
  label: string;
  isActive?: boolean;
  className?: string;
}
function ResponsiveNavigationMenuLink({
  isALink = true,
  className,
  isActive = false,
  url,
  label,
}: ResponsiveNavigationMenuLinkProps) {
  const Comp = isALink ? BreadcrumbLink : BreadcrumbPage;
  const { getNavigationLinkWithPathnameWithoutUpdate } =
    useCustomSearchParams();
  const [isPending, startTransition] = React.useTransition();
  const href = getNavigationLinkWithPathnameWithoutUpdate(url);
  return (
    <Comp asChild className={cn(isActive&&                      "font-bold text-foreground pointer-events-none"
,className)}>
      <LoadingButton
        loading={isPending}
        onClick={() => startTransition(() => {})}
        variant={'ghost'}
        size={'sm'}
        asChild
      >
        <Link href={href}>{label}</Link>
      </LoadingButton>
    </Comp>
  );
}
