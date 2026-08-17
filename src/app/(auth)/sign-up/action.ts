"use server";

import prisma from "@/lib/prisma";
import { hash } from "argon2";
export async function getUsers() {
	return await prisma.user.findMany({ select: { name: true, email: true } });
}

export async function hashing(password: string) {
	const hashing = await hash(password, {
		memoryCost: 19456,
		timeCost: 2,
		parallelism: 1,
		hashLength: 32
	});
	return hashing;
}
