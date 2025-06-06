import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserAvatar from "@/components/ui/user-avatar";
import { QuoteIcon } from "lucide-react";

export default function MessageFromLeaders() {
  return (
    <div className="w-full grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      <LeaderContainer />
      <LeaderContainer />
      <LeaderContainer />
      {/* <LeaderContainer /> */}
    </div>
  );
}

function LeaderContainer() {
  return (
    <div className="relative flex flex-col items-center group">
      <Card className="items-center w-full gap-3  md:mt-[90px]  group-odd:from-warning/10 group-even:from-success/10 md:bg-gradient-to-t ">
        <CardHeader className="w-full gap-0.5 md:*:text-center md:mt-[80px] flex md:flex-col items-center  flex-row  ">
          <UserAvatar
            avatarUrl={`/logo.png`}
            size={75}
            className=" flex md:hidden mr-3"
          />{" "}
          <div>
            <CardTitle className=" uppercase group-even:scale-105 group-even:text-success  transition-all">
              John Doe
            </CardTitle>{" "}
            <CardDescription>Deputy Town Clerk</CardDescription>
            <CardDescription className="text-xs">2025 - now</CardDescription>
          </div>
        </CardHeader>
        <CardContent className=" ">
          <div>
            <QuoteIcon className="fill-warning text-warning rotate-180 float-left mr-2 group-even:fill-success group-even:text-success " />{" "}
            <p className="line-clamp-5 text-ellipsis  text-pretty  ">
              I would like to take this opportunity to thNK YOU ALL for the gift
              of cooperation and service renderedI would like to take this
              opportunity to thNK YOU ALL for the gift of cooperation and
              service rendered I would like to take this opportunity to thNK YOU
              ALL for the gift of cooperation and service rendered
            </p>
            <QuoteIcon className="fill-warning text-warning group-even:fill-success ml-2 group-even:text-success  float-right " />
          </div>
        </CardContent>
        <CardAction></CardAction>
      </Card>
      <UserAvatar
        avatarUrl={`/logo.png`}
        size={180}
        className="absolute top-0 hidden md:flex"
      />
    </div>
  );
}
