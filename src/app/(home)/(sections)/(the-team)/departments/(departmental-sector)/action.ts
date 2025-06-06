"use server";

import { validateRequest } from "@/auth";
import { Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";
import prisma from "@/lib/prisma";
import { departmentalSectorDataInclude } from "@/lib/types";
import {
  DepartmentalSectorSchema,
  departmentalSectorSchema,
} from "@/lib/validation";
import { unauthorized } from "next/navigation";

export async function upsertDepartmentalSector(
  formData: DepartmentalSectorSchema,
) {
  const { user } = await validateRequest();
  if (!user) throw new Error("Unauthorized!");
  const isAuthorized = myPrivileges[user.role].includes(Role.MODERATOR);
  if (!isAuthorized) throw new Error("Unauthorized!");

  const { name, description, hierarchy, departMentId, id } =
    departmentalSectorSchema.parse(formData);
  const data = await prisma.departMentalSector.upsert({
    where: { id },
    create: {
      name,
      description,
      hierarchy,
      departMentId,
    },
    update: { name, description, hierarchy, departMentId },
    include: departmentalSectorDataInclude,
  });
  return data;
}

export async function deleteDepartmentalSector(id: string) {
  const { user } = await validateRequest();
  if (!user) throw new Error("Unauthorized!");
  const isAuthorized = myPrivileges[user.role].includes(Role.MODERATOR);
  if (!isAuthorized) throw new Error("Unauthorized!");

  return await prisma.departMentalSector.delete({
    where: { id },
    include: departmentalSectorDataInclude,
  });
}
