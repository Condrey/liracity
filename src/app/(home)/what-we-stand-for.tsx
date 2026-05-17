"use client";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { webName } from "@/lib/utils";
import { CodeIcon, CopyIcon, FileStackIcon, LightbulbIcon, RocketIcon } from "lucide-react";
import markdownIt from "markdown-it";
import { toast } from "sonner";
const md = markdownIt("commonmark", { html: false });

export default function WhatWeStandFor() {
	return (
		<div className="me-auto flex w-full gap-4 pb-3">
			{/* <div className="hidden aspect-square md:flex h-[250px] w-[300px] bg-card">
				<Image src={`/logo.png`} alt="logo" height={250} width={300} />
			</div> */}

			<Tabs defaultValue="vision" className="w-full space-y-4 rounded-md">
				{/* <div className="space-y-1 mb-4">
					<TypographyH3 title={webName} className=" uppercase text-balance text-start" />
					<h4 className="text-sm text-muted-foreground">Vision, mission, mandate, e.t.c </h4>
				</div> */}
				<div className="border-y bg-card px-3 py-1">
					<TabsList className="h-fit w-full max-w-4xl flex-wrap gap-1 *:h-8 *:flex-1 sm:h-9 [&_svg]:hidden [&_svg]:size-4 sm:[&_svg]:block">
						<TabsTrigger value="vision">
							<LightbulbIcon className="hidden sm:block" />
							Vision
						</TabsTrigger>
						<TabsTrigger value="mission">
							<RocketIcon />
							Mission
						</TabsTrigger>
						<TabsTrigger value="mandate">
							<CodeIcon />
							Mandate
						</TabsTrigger>
						<TabsTrigger value="core_values">
							<FileStackIcon />
							Core Values
						</TabsTrigger>
					</TabsList>
				</div>

				{Object.entries(liraCityCouncilProfile).map(([key, value], index) => {
					return (
						<TabsContent
							key={key}
							value={key}
							className="w-full max-w-prose space-y-3 px-3 text-justify text-pretty hyphens-auto"
						>
							<div className="flex flex-wrap gap-0.5 text-xs text-muted-foreground">
								Tap on these <strong>tabs</strong> above to view more. e.g., on{" "}
								<span className="flex items-center">
									"<RocketIcon className="mr-1 size-3" /> Mission"
								</span>
							</div>

							<div>
								<Button
									variant="secondary"
									title={`Copy ${key} to clipboard`}
									onClick={async () => {
										await navigator.clipboard.writeText(key + " - " + value);

										toast.success(key + " Copied!");
									}}
									className="float-end ms-4"
								>
									<span className="sr-only">Copy {key} to clipboard</span>
									<CopyIcon /> Copy
								</Button>
								<p className="first-letter:capitalize">
									<span className="font-medium tracking-tighter text-muted-foreground italic">{key}</span>{" "}
									<span className="text-start font-medium tracking-tighter text-muted-foreground">| {webName}</span>{" "}
									<span
										dangerouslySetInnerHTML={{ __html: md.render(value) }}
										className="text-sm tracking-normal text-pretty hyphens-auto whitespace-pre-line md:whitespace-normal"
									/>
								</p>
							</div>
						</TabsContent>
					);
				})}
			</Tabs>
		</div>
	);
}
const liraCityCouncilProfile = {
	vision: "Competitive, Green & Equitable Industrial & Commercial Hub/City within the next 30 years.",
	mission:
		"To deliver efficient and equitable services through effective leadership and management of socioeconomic and environmental services for improved livelihood by 2030. ",
	mandate:
		"To plan, review and monitor the implementation of the public relations and corporate social responsibility programs of the city in line with the City mandate and Executive Directors Office  guidelines.",
	core_values: `
- **Professionalism:** Adhering to professional codes of conduct, exhibiting a high degree of competence and best practices prescribed by codes.
- **Accountability:** Holding office in public trust, hence responsible for his/her actions or inactions.
- **Integrity:** Honesty and openness in conducting public affairs.
- **Discipline:** Conforming to rules, regulations, and the code of conduct & ethics & professional codes.
- **Transparency:** Openness in decisions and actions taken; preparedness to give reasons for decisions made.
- **Effectiveness:** Striving to achieve the intended results in terms of quality and quantity in accordance with set targets and performance standards for service delivery.
- **Loyalty:** Commitment to government policies & programs at all levels.
`
};
