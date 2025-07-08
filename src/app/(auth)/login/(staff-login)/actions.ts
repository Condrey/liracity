"use server";

import prisma from "@/lib/prisma";
import { staffLoginSchema, StaffLoginValues } from "@/lib/validation";
import { verify } from "@node-rs/argon2";
import { createSession } from "../../lib/session";
import { generateSessionToken, setSessionTokenCookie } from "../../lib/tokens";

export async function loginAction(credentials: StaffLoginValues): Promise<{ error: string }> {
	console.log(credentials);
	const { ippsNumber, password } = staffLoginSchema.parse(credentials);

	const existingEmployee = await prisma.employee.findUnique({
		where: {
			ippsNumber: ippsNumber.toString()
		},
		include: { user: true }
	});
	let existingUser = existingEmployee?.user;
	if (!existingEmployee || !existingUser) {
		return {
			error: "Incorrect IPPS number or password."
		};
	}

	const validPassword = await verify(existingUser.passwordHash!, password, {
		memoryCost: 19456,
		timeCost: 2,
		outputLen: 32,
		parallelism: 1
	});
	if (!validPassword) {
		return {
			error: "Incorrect IPPS number or password."
		};
	}

	const sessionToken = generateSessionToken();
	const session = await createSession(sessionToken, existingUser.id);
	await setSessionTokenCookie(sessionToken, session.expiresAt);
	return {
		error: JSON.stringify(session, null, 2)
	};
	// return redirect(existingUser.isVerified ? "/" : `/user-verification/${existingUser.id}`);
}
