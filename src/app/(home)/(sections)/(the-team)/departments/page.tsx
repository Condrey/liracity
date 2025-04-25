import { getAllDepartmentList } from "./action";
import ButtonAddEditDepartment from "./button-add-department";
import ListOfDepartments from "./list-of-departments";

export default async function Page() {
  const departments = await getAllDepartmentList();
  return (
    <div className="pt-[85px] w-full max-w-3xl mx-auto space-y-6">
      <div className="space-y-2">
        <div className="flex gap-3 items-center justify-between">
          <h1 className="text-2xl font-bold tracking-tight">Departments</h1>
          <ButtonAddEditDepartment>Add department</ButtonAddEditDepartment>
        </div>
        <p className="max-w-3xl tracking-wide text-balance hyphens-auto w-full ">
          {pageDescription}
        </p>
      </div>

      <ListOfDepartments departments={departments} />
    </div>
  );
}

const pageDescription = `Lira City Council works through a number of departments that handle different aspects of city life.
Each department oversees key sectors that help keep our city running smoothly and efficiently.
This page gives you a quick look at the departments and the areas they’re responsible for.
It’s here to help you know who does what — and where to go when you need support or services.`;
