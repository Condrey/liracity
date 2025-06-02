import { PageDescription, PageTitle } from "@/components/page-utils";
import { whatWeDoLinks } from "@/components/user/constants";
import { Metadata } from "next";
import { getAllDepartmentList } from "./action";
import ButtonAddEditDepartment from "./button-add-edit-department";
import ListOfDepartments from "./list-of-departments";

const { title, description } = whatWeDoLinks.find(
  (val) => val.href === "/departments"
)!;
export const metadata: Metadata = {
  title,
  description,
};
export default async function Page() {
  const departments = await getAllDepartmentList();
  return (
    <div className="pt-[85px] w-full max-w-3xl mx-auto space-y-6">
      <div className="space-y-2">
        <div className="flex gap-3 items-center justify-between">
          <PageTitle heading={title} />
          <ButtonAddEditDepartment>Add department</ButtonAddEditDepartment>
        </div>
        <PageDescription paragraph={pageDescription} />
      </div>

      <ListOfDepartments departments={departments} />
    </div>
  );
}

const pageDescription = `Lira City Council works through a number of departments that handle different aspects of city life.
Each department oversees key sectors that help keep our city running smoothly and efficiently.
This page gives you a quick look at the departments and the areas they’re responsible for.
It’s here to help you know who does what — and where to go when you need support or services.`;
