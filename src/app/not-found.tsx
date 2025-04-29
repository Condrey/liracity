import { webName } from "@/lib/utils";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "404",
  description: `The resource was not found in ${webName}`,
};
export default function Loading() {
  return (
    <div className="flex flex-col h-dvh gap-4 justify-center items-center">
      <p>The resource you are looking for wasn't found</p>
    </div>
  );
}
