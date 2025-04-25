'use server'

import prisma from "@/lib/prisma"
import { departmentalSectorDataInclude } from "@/lib/types";
import { DepartmentalSectorSchema,departmentalSectorSchema } from "@/lib/validation";

export async function upsertDepartmentalSector(formData: DepartmentalSectorSchema) {
  // TODO: please validate the request 
  const { name, description,hierarchy,departMentId, id } = departmentalSectorSchema.parse(formData);
  const data = await prisma.departMentalSector.upsert({
    where: { id },
    create: {
      name,description,hierarchy,departMentId,
    },
    update: { name,description,hierarchy,departMentId, },
    include: departmentalSectorDataInclude,
  });
  return data;
}