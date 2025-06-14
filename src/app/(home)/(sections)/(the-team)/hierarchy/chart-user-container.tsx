import { buttonVariants } from "@/components/ui/button";
import UserAvatar from "@/components/ui/user-avatar";
import { ChartUser } from "@/lib/types";
import { cn } from "@/lib/utils";
import { MailIcon, PhoneCallIcon, VerifiedIcon } from "lucide-react";
import Link from "next/link";

interface ChartUserContainerProps {
  user?: ChartUser;
  department: React.ReactNode;
}

export default function ChartUserContainer({
  user,
  department,
}: ChartUserContainerProps) {
  return (
    <div className="max-w-[15rem] lg:max-w-xs w-full mx-auto bg-card rounded-md border ">
      <div
        className={cn(
          "text-center uppercase px-3 py-4",
          user?.hierarchy! >= 1
            ? "bg-warning/50"
            : user?.hierarchy! >= 3
            ? "bg-success/50"
            : "bg-primary/50",
          "dark:bg-card ",
          user && "dark:border-b"
        )}
      >
        {department}
      </div>
      {!!user && (
        <>
          <div className="p-3 flex-wrap flex flex-col  md:flex-row justify-start items-center gap-3">
            <UserAvatar
              avatarUrl={user.avatarUrl}
              size={75}
              className="mx-auto max-w-fit w-full"
            />
            <div className="flex uppercase max-w-fit w-full mx-auto flex-col justify-start">
              <strong className="text-xl flex items-center md:tex-2xl line-clamp-2 text-ellipsis tracking-tighter font-bold ">
                {!!user.title && (
                  <span className="text-muted-foreground: ">{user.title}</span>
                )}{" "}
                {user.name}{" "}
                {user.isVerified && (
                  <VerifiedIcon className="fill-success text-success-foreground size-4 inline" />
                )}
              </strong>
              <span className="text-sm text-muted-foreground">
                {user.resumedOffice} - {user.endedOffice ?? "Now"}
              </span>
              <span className="text-sm">{user.position}</span>
            </div>
          </div>
          <div className="p-2 dark:border-t flex gap-3 justify-evenly">
            <Link
              href={`tel:${user.telephone}`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <PhoneCallIcon className="size-4 fill-success text-success  dark:text-background" />{" "}
              Call
            </Link>
            <Link
              href={`mailto:${user.email}`}
              className={buttonVariants({ variant: "outline", size: "sm" })}
            >
              <MailIcon className="size-4 fill-primary text-primary-foreground dark:text-background" />{" "}
              Email
            </Link>
          </div>
        </>
      )}
    </div>
  );
}
