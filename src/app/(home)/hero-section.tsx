import { Button, buttonVariants } from "@/components/ui/button";
import { cn, webName } from "@/lib/utils";
import { ArrowRight, MoveRightIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function HeroSection() {
  return (
    <div className="md:h-[90vh] lg:max-h-[75vh] overflow-clip w-full   grid   md:grid-cols-3 xl:grid-cols-4  items-center    ">
      <Image
        src={`/hero.jpg`}
        alt="hero-image"
        width={640}
        height={800}
        objectFit="cover"
        // placeholder="blur"
        className="w-full lg:h-full  shrink flex-1 bg-cover lg:col-span-2  md:col-span-3 xl:col-span-3 mt-14 md:mt-0 mask-radial-[100%_100%] mask-radial-from-60% lg:mask-radial-at-left mask-radial-at-top"
      />
      <article className="lg:max-w-prose shrink-0 md:max-w-fit min-h-fit flex-none  w-full mx-auto px-3 md:col-span-3 lg:col-span-1">
        <time className=" ordinal text-sm text-muted-foreground slashed-zero">
          14th December, 2025
        </time>
        <h2 className="font-medium tracking-tight line-clamp-2 text-balance">
          New tax holiday policy on startup business
        </h2>

        <p className="mt-1 hyphens-auto text-sm leading-relaxed italic sm:not-italic  text-balance text-gray-500 line-clamp-3 xl:line-clamp-5 md:max-w-prose">
          In a move set to stimulate innovation and boost entrepreneurship, the
          government has announced a new tax holiday for startup businesses
          across the country. This policy, which takes effect starting July 1,
          2025, will exempt eligible startups from paying corporate income tax
          for their first three years of operation. According to the Ministry of
          Finance, the tax holiday is part of a broader economic strategy aimed
          at supporting young entrepreneurs, promoting job creation, and
          encouraging investment in key sectors such as technology, agriculture,
          and manufacturing. “Startups are the backbone of innovation and
          economic growth,” said Hon. Rebecca Akello, State Minister for
          Investment and Privatization. “By reducing the financial burden on new
          businesses, we hope to create an environment where young innovators
          can thrive, scale, and compete both locally and globally.”{" "}
        </p>
        <div className="w-full flex">
          <Link
            href={``}
            className={cn(
              buttonVariants(),
              "group/read-more w-full max-w-fit md:mx-0 mx-auto sm:ms-auto sm:mx-0 mt-2",
            )}
          >
            <span>Read more </span>
            <MoveRightIcon className="group-hover/read-more:translate-x-3 transition-all duration-300" />
          </Link>
        </div>
      </article>
    </div>
  );
}
