"use server";

import { validateRequest } from "@/auth";
import { Role } from "@/generated/prisma";
import { myPrivileges } from "@/lib/enums";
import prisma from "@/lib/prisma";
import { employeeDataInclude } from "@/lib/types";
import { employeeSchema, EmployeeSchema } from "@/lib/validation";
import { hash } from "@node-rs/argon2";

function getTitle(position: string): string {
  return position
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase())
    .join("");
}

export async function upsertStaffEmployee(input: EmployeeSchema) {
  const { user: currentUser } = await validateRequest();
  const isAuthorized =
    !!currentUser && myPrivileges[currentUser.role].includes(Role.MODERATOR);
  if (!isAuthorized) throw Error("Unauthorized!");
  const {
    departmentalSectorId,
    ippsNumber,
    name,
    userId,
    employeeId,
    assumedOffice,
    position,
  } = employeeSchema.parse(input);
  const existingEmployee = await prisma.employee.findFirst({
    where: { ippsNumber: `${ippsNumber}` },
    include: { user: true, departMentalSector: true },
  });
  if (existingEmployee&&!employeeId) {
    return `IPPS number already belongs to ${existingEmployee.user.name} in ${existingEmployee.departMentalSector?.name}`;
  }
  return await prisma.$transaction(
    
    async (tx) => {
       const passwordHash = await hash('Abc@@@123', {
            memoryCost: 19456,
            timeCost: 2,
            outputLen: 32,
            parallelism: 1,
          });
      const user = await tx.user.upsert({
        where: { id: userId },
        create: { name ,passwordHash,role:Role.STAFF},
        update: { name },
      });
      const employee = await tx.employee.upsert({
        where: { id: employeeId },
        create: {
          departMentalSectorId: departmentalSectorId,
          ippsNumber: `${ippsNumber}`,
          hierarchy: 1,
          position,
          title: getTitle(position),
          assumedOffice,
          userId: user.id,
        },
        update: {
          departMentalSectorId: departmentalSectorId,
          ippsNumber: `${ippsNumber}`,
          hierarchy: 1,
          position,
          title: getTitle(position),
          assumedOffice,
          userId: user.id,
        },
        include: employeeDataInclude,
      });
      return employee;
    },
    { maxWait: 60000, timeout: 60000 }
  );
}


export async function deleteEmployee(id: string) {
  const { user } = await validateRequest();
  if (!user) throw new Error("Unauthorized!");
  const isAuthorized = myPrivileges[user.role].includes(Role.MODERATOR);
  if (!isAuthorized) throw new Error("Unauthorized!");
  return await prisma.employee.delete({
    where: { id },
    include: employeeDataInclude,
  });
}
