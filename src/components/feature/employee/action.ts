"use server";

import { Role } from "@/generated/prisma/enums";
import { DEFAULT_PASSWORD } from "@/lib/constants";
import { myPrivileges } from "@/lib/enums";
import { validateRequest } from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { employeeDataInclude, organizationDataInclude } from "@/lib/types";
import { employeeSchema, EmployeeSchema } from "@/lib/validation";
import { hash } from "argon2";
import { cache } from "react";

async function allDepartments() {
	return await prisma.organization.findMany({
		include: organizationDataInclude
	});
}
export const getAllDepartments = cache(allDepartments);

export async function upsertStaffEmployee(input: EmployeeSchema) {
	const { user: currentUser } = await validateRequest();
	const isAuthorized = !!currentUser && myPrivileges[currentUser.role as Role].includes(Role.MODERATOR);
	if (!isAuthorized) throw Error("Unauthorized!");
	const { organizationId, ippsNumber, name, userId, employeeId, assumedOffice, position } = employeeSchema.parse(input);
	const existingEmployee = await prisma.employee.findFirst({
		where: { ippsNumber: `${ippsNumber}` },
		include: { user: true }
	});
	if (existingEmployee && !employeeId) {
		return `IPPS number already belongs to ${existingEmployee.user.name} `;
	}
	return await prisma.$transaction(
		async (tx) => {
			const passwordHash = await hash(DEFAULT_PASSWORD, {
				// memoryCost: 19456,
				// timeCost: 2,
				// outputLen: 32,
				// parallelism: 1
			});
			const user = await tx.user.upsert({
				where: { id: userId },
				create: { name, role: Role.STAFF },
				update: { name }
			});
			const employee = await tx.employee.upsert({
				where: { id: employeeId },
				create: {
					ippsNumber: `${ippsNumber}`,

					positionId: position,
					assumedOffice,
					userId: user.id
				},
				update: {
					ippsNumber: `${ippsNumber}`,

					positionId: position,
					assumedOffice,
					userId: user.id
				},
				include: employeeDataInclude
			});
			return employee;
		},
		{ maxWait: 60000, timeout: 60000 }
	);
}

export async function deleteEmployee(id: string) {
	const { user } = await validateRequest();
	if (!user) throw new Error("Unauthorized!");
	const isAuthorized = myPrivileges[user.role as Role].includes(Role.MODERATOR);
	if (!isAuthorized) throw new Error("Unauthorized!");
	return await prisma.employee.delete({
		where: { id },
		include: employeeDataInclude
	});
}
