import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import UserAvatar from "@/components/ui/user-avatar";

export default function MessageFromLeaders() {
  return (
    <div className="w-full grid gap-3 sm:grid-cols-2 md:grid-cols-3">
      <LeaderContainer />
    </div>
  );
}

function LeaderContainer() {
  return (
    <Card className="items-center w-full gap-3">
      <CardContent>
        <UserAvatar avatarUrl={`/logo.png`} size={150} />
      </CardContent>
      <CardHeader className="w-full gap-0.5 *:text-center ">
        <CardTitle>John Doe</CardTitle>{" "}
        <CardDescription>Deputy Town Clerk</CardDescription>
        <CardDescription>2025 - now</CardDescription>
      </CardHeader>
      <CardFooter>
        <p className="line-clamp-3 text-ellipsis text-muted-foreground">
          ldklkdnlsk dsklndlsnknlds d slklkndlknl dslaknnlda dal
          knlkdlknlkldkanlk ladksdnlalnkdlkank dasnklanlkssandlsknalkd
          kalknlknslkanlkdnlaksnlkad laknlkdsalknlkanlknda lskanlklkadknlknka
          knalknlksnlkndknaksnldna
        </p>
      </CardFooter>
      <CardAction></CardAction>
    </Card>
  );
}
