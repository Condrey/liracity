import {PageDescription, PageTitle} from "@/components/page-utils";

export default async function Page() {
  return (
    <div className="pt-[85px] w-full max-w-3xl mx-auto space-y-6">
      <div className="space-y-2">
        <PageTitle heading="Hierarchy" />
        <PageDescription paragraph={pageDescription}/>
            </div>

      {/* <ListOfDepartments departments={departments} /> */}
    </div>
  );
}

const pageDescription = `Lira City Council works through a number of departments that handle different aspects of city life.
Each department oversees key sectors that help keep our city running smoothly and efficiently.
This page gives you a quick look at the departments and the areas they’re responsible for.
It’s here to help you know who does what — and where to go when you need support or services.`;
