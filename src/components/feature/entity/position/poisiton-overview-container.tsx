import { PositionData } from "@/lib/types";

import TipTapViewer from "@/components/tip-tap-editor/tip-tap-viewer";
import { Badge } from "@/components/ui/badge";
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { cn } from "@/lib/utils";
import { MapPinIcon, User2Icon } from "lucide-react";

interface Props {
	position: PositionData;
	children: React.ReactNode;
	className?: string;
}

export default function PositionOverviewContainer({ position, children, className }: Props) {
	const { jobTitle, salaryScale, reportsTo, jobPurpose, responsibleFor, dutiesAndQualifications, departmentalSection } =
		position;
	return (
		<HoverCard>
			<HoverCardTrigger>{children}</HoverCardTrigger>
			<HoverCardContent className="w-full min-w-3xl space-y-4">
				<ScrollArea className={cn("space-y-4 *:mb-4", className)}>
					<h2 className="typeset mb-4 text-center text-xl font-bold tracking-tight uppercase">
						<span>{jobTitle}</span>{" "}
						{departmentalSection && (
							<Badge>
								<MapPinIcon />
								{`${departmentalSection.stationType}`}
							</Badge>
						)}
					</h2>
					<div className="mb-4 grid w-full grid-cols-5 gap-3">
						<div className="flex justify-center bg-accent">
							<User2Icon strokeWidth={0.5} className="size-30" />
						</div>
						<div className="col-span-4 flex flex-col gap-2">
							<div className="flex w-full gap-2 *:flex *:flex-1 *:flex-col *:border *:p-2">
								<div>
									<p>
										<strong>Salary Scale:</strong> {salaryScale}
									</p>
								</div>
								<div>
									{reportsTo ? (
										<p>
											<strong>Reports to:</strong> <span>{reportsTo.jobTitle}</span>{" "}
											{departmentalSection && (
												<Badge>
													<MapPinIcon />
													{`${reportsTo.departmentalSection?.stationType}`}
												</Badge>
											)}
										</p>
									) : (
										<p>
											<strong>Reports to:</strong> NOT APPLICABLE
										</p>
									)}
								</div>
							</div>
							<p className="border bg-accent p-2 text-accent-foreground">
								<strong className="">Job Purpose:</strong> {jobPurpose}
							</p>
						</div>
					</div>

					<TipTapViewer content={dutiesAndQualifications} className="mb-4" />
				</ScrollArea>
			</HoverCardContent>
		</HoverCard>
	);
}
