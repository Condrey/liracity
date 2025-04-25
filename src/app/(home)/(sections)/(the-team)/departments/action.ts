"use server";

import prisma from "@/lib/prisma";
import { departmentDataInclude } from "@/lib/types";
import { departmentSchema, DepartmentSchema } from "@/lib/validation";
import { cache } from "react";

async function departments() {
  const departments = await prisma.departMent.findMany({
    orderBy: [{ name: "asc" }],
    include: departmentDataInclude,
  });
  return departments;
}
export const getAllDepartmentList = cache(departments);

export async function upsertDepartment(formData: DepartmentSchema) {
  // TODO: please validate the request 
  const { name, headOfDepartmentId,about, id } = departmentSchema.parse(formData);
  const data = await prisma.departMent.upsert({
    where: { id },
    create: {
      name,about,
      headOfDepartmentId,
    },
    update: { name,about, headOfDepartmentId },
    include: departmentDataInclude,
  });
  return data;
}
