"use server";

import prisma from "@/lib/prisma";
import { IGGDeclarationSchema, iggDeclarationSchema } from "@/lib/validation";
import { cache } from "react";

async function allIggDeclarations() {
	const iggDeclarations = await prisma.iggDeclaration.findMany();
	return iggDeclarations;
}
export const getAllIggDeclarations = cache(allIggDeclarations);

export async function upsertIggDeclaration(input: IGGDeclarationSchema) {
	const { email, name, nin, phoneNumber, title, id } = iggDeclarationSchema.parse(input);
	await prisma.iggDeclaration.upsert({
		where: { id },
		create: { email, name, nin, phoneNumber, title },
		update: { email, name, nin, phoneNumber, title }
	});
}

export async function deleteIggDeclaration(input: IGGDeclarationSchema) {
	await prisma.iggDeclaration.delete({
		where: { id: input.id }
	});
}
