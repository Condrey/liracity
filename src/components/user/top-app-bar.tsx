import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn, webName } from "@/lib/utils";

import { MenuIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";
import { navLinks } from "./constants";
import LoginUserInfo from "./login-user-info";

export default function TopAppBar({ className }: { className?: string }) {
  return (
    <NavigationMenu className={cn("w-full flex  *:flex-1", className)}>
      <NavigationMenuList className="flex justify-between w-full gap-3 flex-wrap   ">
        {/* For small screens : section */}
        <div className="flex items-center gap-2">
          <SmallScreen />
          <h2 className=" md:hidden">{webName}</h2>
        </div>

        {/* Logo area  */}
        <NavigationMenuItem className="xl:block hidden">
          <Link href={"/"} passHref>
            <Image src={`/logo.png`} height={50} width={50} alt="logo" />
          </Link>
        </NavigationMenuItem>

        {/* Big screen section: Navigation menu links  */}
        {navLinks.map((nav, index, array) => {
          const parentLink = nav.href;
          const Icon = nav.icon;
          const alignRight = array.length >= 5 && index >= 4;

          return (
            <NavigationMenuItem key={parentLink} className="hidden md:flex">
              {!!nav.children?.length ? (
                <>
                  <NavigationMenuTrigger>{nav.title}</NavigationMenuTrigger>
                  <NavigationMenuContent
                    className={cn(
                      "z-50 left-0",
                      alignRight ? "md:right-10 md:left-auto" : "md:left-10"
                    )}
                  >
                    <ul className="grid gap-3 p-4 md:w-[400px]  lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <Link
                            className="flex flex-row h-full items-center lg:justify-center w-full select-none lg:flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                            href={parentLink}
                          >
                            {Icon && (
                              <Icon className="size-16" strokeWidth={0.5} />
                            )}
                            <div className="flex flex-col lg:items-center lg:*:text-center">
                              <div className="mb-2 mt-4 text-lg font-medium tracking-tight uppercase">
                                {nav.title}
                              </div>
                              <p className="text-sm leading-tight text-muted-foreground">
                                {nav.description}
                              </p>
                            </div>
                          </Link>
                        </NavigationMenuLink>
                      </li>
                      {nav.children.map(({ title, href, description }) => {
                        return (
                          <ListItem key={href} href={href} title={title}>
                            {description}
                          </ListItem>
                        );
                      })}
                    </ul>
                  </NavigationMenuContent>
                </>
              ) : (
                <>
                  <Link
                    href={parentLink}
                    passHref
                    className={navigationMenuTriggerStyle()}
                  >
                    {nav.title}
                  </Link>
                </>
              )}
            </NavigationMenuItem>
          );
        })}

        {/* login information area  */}
        <LoginUserInfo />
      </NavigationMenuList>
    </NavigationMenu>
  );
}

function ListItem({
  className,
  title,
  children,
  href,
}: {
  className?: string;
  href: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          passHref
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
        >
          <div className="text-sm font-medium leading-none uppercase tracking-tight">
            {title}
          </div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

function SmallScreen() {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden">
        <MenuIcon />
      </SheetTrigger>
      <SheetContent side="left">
        <SheetTitle>{webName}</SheetTitle>

        <div className="flex flex-col">
          {navLinks.map((nav, index, array) => {
            const parentLink = nav.href;
            const Icon = nav.icon;
            const alignRight = array.length >= 5 && index >= 4;

            return (
              <DropdownMenu key={parentLink}>
                {!!nav.children?.length ? (
                  <>
                    <DropdownMenuTrigger>{nav.title}</DropdownMenuTrigger>
                    <DropdownMenuContent
                      className={cn(
                        "z-50 left-0",
                        alignRight ? "md:right-10 md:left-auto" : "md:left-10"
                      )}
                    >
                      <DropdownMenuItem asChild>
                        <Link href={parentLink}>{nav.title}</Link>
                      </DropdownMenuItem>

                      {nav.children.map(({ title, href, description }) => {
                        return (
                          <DropdownMenuItem asChild>
                            <Link key={href} href={href}>
                              {title}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuContent>
                  </>
                ) : (
                  <>
                    <Link href={parentLink} passHref>
                      {nav.title}
                    </Link>
                  </>
                )}
              </DropdownMenu>
            );
          })}
        </div>
      </SheetContent>
    </Sheet>
  );
}
