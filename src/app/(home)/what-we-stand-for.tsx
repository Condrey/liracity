"use client";

import { TypographyH3 } from "@/components/page-utils";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { webName } from "@/lib/utils";
import { CodeIcon, CopyIcon, FileStackIcon, LightbulbIcon, RocketIcon } from "lucide-react";
import Image from "next/image";
import { toast } from "sonner";

export default function WhatWeStandFor() {
	return (
		<div className="flex border-y max-w-4xl w-full mx-auto  p-3 gap-4">
			<div className="hidden aspect-square md:flex size-[250px]">
				<Image src={`/logo.png`} alt="logo" height={250} width={250} />
			</div>

			<Tabs defaultValue="vision" className=" w-full rounded-md">
				<div className="space-y-1 mb-4">
          <TypographyH3 title={webName} className=" uppercase text-balance text-start"/>
					<h4 className="text-sm text-muted-foreground">Vision, mission, mandate, e.t.c </h4>
				</div>
				<TabsList className="w-full h-fit sm:h-9 *:h-8 *:flex-1 gap-1  [&_svg]:size-4 [&_svg]:hidden sm:[&_svg]:block flex-wrap ">
					<TabsTrigger value="vision">
						<LightbulbIcon className="hidden sm:block " />
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
				{Object.entries(liraCityCouncilProfile).map(([key, value], index) => (
					<TabsContent key={key} value={key} className="w-full text-justify space-y-3 text-pretty  hyphens-auto">
						<div className="text-muted-foreground flex gap-0.5 flex-wrap text-xs">
							Tap on these <strong>tabs</strong> above to view more. e.g., on{" "}
							<span className="flex items-center">
								"<RocketIcon className="size-3 mr-1" /> Mission"
							</span>
						</div>

						{Array.isArray(value) ? (
							<div>
								<Button
									variant="outline"
									title={`Copy ${key} to clipboard`}
									onClick={() => {
										navigator.clipboard.writeText(key + " - " + value.slice().join(", "));
										toast.success(key + " Copied!");
									}}
									className="float-end ms-4"
								>
									<span className="sr-only">Copy {key} to clipboard</span>
									<CopyIcon /> Copy
								</Button>
								<ul className=" list-disc pl-6 tracking-wide antialiased">
									{value.map((item, index) => (
										<li key={index}>{item}</li>
									))}
								</ul>
							</div>
						) : (
							<div>
								<Button
									variant="outline"
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
								<p className=" first-letter:capitalize">
									<span className="italic font-medium">{key}</span>{" "}
									<span className="text-start font-medium">| {webName} –</span> {value}
								</p>
							</div>
						)}
					</TabsContent>
				))}
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
	core_values: [
		"Professionalism: Adhering to professional codes of conduct, exhibit high degree of competence and best practices prescribed by codes.",
		"Accountability: Holding office in  public trust hence responsible for his/her actions or inactions.",
		"Integrity: Honesty and openness in conducting public affairs.",
		"Discipline: Conforming to rules, regulations and the code of conduct & ethics & professional codes.",
		"Transparency: Openness in decisions and actions taken, preparedness to give reasons for decisions taken.",
		"Effectiveness: Strive to achieve the intended results in terms of quality and quantity in accordance with set targets and performance standards for service delivery.",
		"Loyalty: Commitment to government  policies & programs at all levels. "
	]
};
