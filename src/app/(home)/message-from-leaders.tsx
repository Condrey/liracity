import { TypographyH1 } from "@/components/page-utils";
import { Card, CardAction, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import UserAvatar from "@/components/ui/user-avatar";
import { QuoteIcon } from "lucide-react";

export default function MessageFromLeaders() {
	return (
		<div className="mx-auto max-w-5xl space-y-4">
			<TypographyH1 title="Message from Leaders" className="uppercase" />
			<div className="grid w-full gap-3 sm:grid-cols-2 md:grid-cols-3">
				<LeaderContainer />
				<LeaderContainer />
				<LeaderContainer />
				{/* <LeaderContainer /> */}
			</div>
		</div>
	);
}

function LeaderContainer() {
	return (
		<div className="group relative flex flex-col items-center">
			<Card className="w-full items-center gap-3 group-odd:from-warning/10 group-even:from-success/10 md:mt-[90px] md:bg-gradient-to-t">
				<CardHeader className="flex w-full flex-row items-center gap-0.5 md:mt-[80px] md:flex-col md:*:text-center">
					<UserAvatar image={null} size={75} className="mr-3 flex md:hidden" />{" "}
					<div>
						<CardTitle className="uppercase transition-all group-even:scale-105 group-even:text-success">
							John Doe
						</CardTitle>{" "}
						<CardDescription>Deputy Town Clerk</CardDescription>
						<CardDescription className="text-xs">2025 - now</CardDescription>
					</div>
				</CardHeader>
				<CardContent className=" ">
					<div>
						<QuoteIcon className="float-left mr-2 rotate-180 fill-warning text-warning group-even:fill-success group-even:text-success" />{" "}
						<p className="line-clamp-5 text-pretty text-ellipsis">
							I would like to take this opportunity to thNK YOU ALL for the gift of cooperation and service renderedI
							would like to take this opportunity to thNK YOU ALL for the gift of cooperation and service rendered I
							would like to take this opportunity to thNK YOU ALL for the gift of cooperation and service rendered
						</p>
						<QuoteIcon className="float-right ml-2 fill-warning text-warning group-even:fill-success group-even:text-success" />
					</div>
				</CardContent>
				<CardAction></CardAction>
			</Card>
			<UserAvatar image={null} size={180} className="absolute top-0 hidden border-2 md:flex" />
		</div>
	);
}
