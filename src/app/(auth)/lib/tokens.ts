import prisma from "@/lib/prisma";
import { cookies } from "next/headers";
import { deleteSessionById, getSessionById, LuciaSession, LuciaUser, SessionValidationResult } from "./session";
import { constantTimeEqual, generateSecureRandomString, hashSecret, stringToUint8Array } from "./utils";

const activityCheckIntervalSeconds = 60 * 60; // 1 hour

export function generateSessionToken(): string {
	const id = generateSecureRandomString();
	const secret = generateSecureRandomString();
	const token = id + "." + secret;
	return token;
}

export async function validateSessionToken(token: string): Promise<SessionValidationResult> {
	const now = new Date();

	const tokenParts = token.split(".");
	if (tokenParts.length != 2) {
		return { user: null, session: null };
	}
	const sessionId = tokenParts[0];
	const sessionSecret = tokenParts[1];


	const session = await getSessionById(sessionId);
	if (!session) {
        console.error('No session found for ID:', sessionId);
		return { session: null, user: null };
	}
    
	const tokenSecretHash = await hashSecret(sessionSecret);
    const sessionSecretHashBytes = stringToUint8Array(session.secretHash);
	const validSecret = constantTimeEqual(tokenSecretHash, sessionSecretHashBytes);
	if (!validSecret) {
        console.error('Session secret does not match for session ID:', sessionId);
		return { session: null, user: null };
	}

	if (Date.now() >= session.expiresAt.getTime()) {
		await deleteSessionById(sessionId);
		return { session: null, user: null };
	}
	if (now.getTime() - session.lastVerifiedAt.getTime() >= activityCheckIntervalSeconds * 1000) {
		session.lastVerifiedAt = now;
		 await prisma.session.update({
			where: {
				id: session.id
			},
			data: {
				lastVerifiedAt: now
			}
		});
	}
	if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 15) {
		session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 30);
		await prisma.session.update({
			where: { id: sessionId },
			data: { expiresAt: session.expiresAt }
		});
	};
	return { session:session satisfies LuciaSession, user: session.user as LuciaUser  };
}

export async function deleteSessionTokenCookie(): Promise<void> {
	const cookieStore = await cookies();
	cookieStore.set("oauth_session", "", {
		httpOnly: true,
		path: "/",
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		maxAge: 0 // Set to 0 to delete the cookie
	});
}

export async function setSessionTokenCookie(token: string, expiresAt: Date): Promise<void> {
	const cookieStore = await cookies();
	cookieStore.set("oauth_session", token, {
		httpOnly: true,
		path: "/",
		secure: process.env.NODE_ENV === "production",
		sameSite: "lax",
		expires: expiresAt,
    
	});
}
