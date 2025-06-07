"use server";

import { validateRequest } from "@/auth";
import { Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";
import prisma from "@/lib/prisma";
import { departmentDataInclude } from "@/lib/types";
import { departmentSchema, DepartmentSchema } from "@/lib/validation";
import { unauthorized } from "next/navigation";
import { cache } from "react";

async function departments() {
  const departments = await prisma.departMent.findMany({
    orderBy: [{ name: "asc" }],
    include: departmentDataInclude,
  });
  return departments;
}
export const getAllDepartmentList = cache(departments);

async function departmentById(id:string){
  return await prisma.departMent.findUnique({where:{id},include:departmentDataInclude})
}
export const getDepartmentById = cache(departmentById)

export async function upsertDepartment(formData: DepartmentSchema) {
  const { user } = await validateRequest();
  if (!user) throw new Error("Unauthorized!");
  const isAuthorized = myPrivileges[user.role].includes(Role.MODERATOR);
  if (!isAuthorized) throw new Error("Unauthorized!");

  const { name, headOfDepartmentId, about, id } =
    departmentSchema.parse(formData);
  const data = await prisma.departMent.upsert({
    where: { id },
    create: {
      name,
      about,
      headOfDepartmentId,
    },
    update: { name, about, headOfDepartmentId },
    include: departmentDataInclude,
  });
  return data;
}

export async function deleteDepartment(id: string) {
  const { user } = await validateRequest();
  if (!user) throw new Error("Unauthorized!");
  const isAuthorized = myPrivileges[user.role].includes(Role.MODERATOR);
  if (!isAuthorized) throw new Error("Unauthorized!");
  return await prisma.departMent.delete({
    where: { id },
    include: departmentDataInclude,
  });
}
