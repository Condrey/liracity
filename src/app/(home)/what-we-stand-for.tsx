import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { webName } from "@/lib/utils";
import {
  CodeIcon,
  FileStackIcon,
  LightbulbIcon,
  MoveRightIcon,
  RocketIcon,
} from "lucide-react";
import Image from "next/image";

export default async function WhatWeStandFor() {

  
  return (
    <div className="flex border-y py-3 gap-3">
      <Image
        src={`/logo.png`}
        alt="logo"
        height={250}
        width={250}
        className="basis-1/4 hidden md:block"
      />
      <div className="basis-1/3 gap-1 *:text-center lg:justify-start  p-3 rounded-md  flex-col md:basis-1/4 hidden md:hidden lg:flex sm:flex justify-center  items-center">
        <h1 className="text-4xl text-balance  font-bold uppercase">
          {webName}
        </h1>
        <h2 className="text-2xl decoration-dashed underline font-semibold  text-balance hidden lg:block ">
          What we stand for
        </h2>
        <q className="text-xl italic text-muted-foreground">Our building blocks</q>
        <div className="flex items-center text-xs w-full justify-center gap-0.5 align-middle">
          <span>Vision, mission, mandate, e.t.c </span>
          <MoveRightIcon className="size-4" />
        </div>
      </div>
      <Tabs defaultValue="vision" className=" w-full sm:basis-2/3 md:basis-2/4">
        <TabsList className="w-full h-fit sm:h-9 *:h-8 *:flex-1 gap-1 bg-transparent [&_svg]:size-4 [&_svg]:hidden sm:[&_svg]:block flex-wrap ">
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
          <TabsContent
            key={key}
            value={key}
            className="w-full text-justify space-y-3 text-pretty  hyphens-auto"
          >
            <div className="text-muted-foreground flex gap-0.5 flex-wrap text-xs">
              Tap on these <strong>tabs</strong> above to view more. e.g., on{" "}
              <span className="flex items-center">
                "<RocketIcon className="size-3 mr-1" /> Mission"
              </span>
            </div>
          
            {Array.isArray(value) ? (
              <ul className=" list-disc pl-6 tracking-wide antialiased">
                {value.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <p className=" first-letter:capitalize">
                <span className="italic font-medium">{key}</span>{" "}
                <span className="text-start font-medium">| {webName} –</span> {value}
              </p>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}
const liraCityCouncilProfile = {
  vision:
    "A transformed, inclusive, and sustainable city providing quality services and opportunities for all.",
  mission:
    "To deliver efficient and people-centered services that enhance the quality of life for residents through participatory governance, sustainable development, and innovation.",
  mandate:
    "To plan, manage, and deliver municipal services in line with national development goals, ensuring equitable access, accountability, and the wellbeing of all citizens in Lira City.",
  core_values: [
    "Transparency and Accountability",
    "Inclusiveness and Participation",
    "Professionalism and Integrity",
    "Innovation and Excellence",
    "Environmental Stewardship",
    "Equity and Social Justice",
  ],
};
