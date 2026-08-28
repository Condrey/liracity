"use server";

import prisma from "@/lib/prisma";
import { employeeDataInclude } from "@/lib/types";
import { cache } from "react";

async function allStaffs() {
	return await prisma.employee.findMany({
		include: employeeDataInclude
	});
}
export const getAllStaffs = cache(allStaffs);
