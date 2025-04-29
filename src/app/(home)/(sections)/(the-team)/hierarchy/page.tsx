import { PageDescription, PageTitle } from "@/components/page-utils";
import Chart from "./chart";

import { whatWeDoLinks } from "@/components/user/constants";
import { Metadata } from "next";
import prisma from "@/lib/prisma";
import { departmentDataInclude } from "@/lib/types";

const { title, description } = whatWeDoLinks.find(
  (val) => val.href === "/hierarchy"
)!;
export const metadata: Metadata = {
  title,
  description,
};
export default async function Page() {
  const departments = await prisma.departMent.findMany({
    include: departmentDataInclude,
  });
  return (
    <div className="pt-[85px] w-full max-w-3xl mx-auto space-y-6">
      <div className="space-y-2">
        <PageTitle heading={title} />
        <PageDescription paragraph={pageDescription} />
      </div>
      {/* <Chart departments={departments} /> */}

      {/* <ListOfDepartments departments={departments} /> */}
    </div>
  );
}

const pageDescription = `Lira City Council works through a number of departments that handle different aspects of city life.
Each department oversees key sectors that help keep our city running smoothly and efficiently.
This page gives you a quick look at the departments and the areas they’re responsible for.
It’s here to help you know who does what — and where to go when you need support or services.`;
