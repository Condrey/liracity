import { webName } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404 - Not found",
  description: `The resource was not found in ${webName}`,
};
export default function Loading() {
  return (
    <div className="flex flex-col h-dvh gap-4 justify-center items-center">
      <h1 className="text-2xl font-black md:text-3xl uppercase slashed-zero oldstyle-nums">
        404 | Not found
      </h1>
      <p className="max-w-sm text-muted-foreground text-center">
        The resource you are looking for wasn't found. Please, check the url and
        try again
      </p>
    </div>
  );
}
