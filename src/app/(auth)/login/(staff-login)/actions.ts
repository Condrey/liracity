"use server";

import { lucia } from "@/auth";
import prisma from "@/lib/prisma";
import { staffLoginSchema, StaffLoginValues } from "@/lib/validation";
import { verify } from "@node-rs/argon2";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function loginAction(
  credentials: StaffLoginValues,
): Promise<{ error: string }> {
  const cookieStore = await cookies();
  console.log(credentials);
  const { ippsNumber, password } = staffLoginSchema.parse(credentials);

  let existingUser = await prisma.employee.findFirst({
    where: {
      ippsNumber: {
        equals: ippsNumber.toString(),
        mode: "insensitive",
      },
    },
    include: { user: true },
  });

  if (!existingUser || !existingUser.user.passwordHash) {
    return {
      error: "Incorrect Ipps number or password.",
    };
  }

  const validPassword = await verify(existingUser.user.passwordHash, password, {
    memoryCost: 19456,
    timeCost: 2,
    outputLen: 32,
    parallelism: 1,
  });
  if (!validPassword) {
    return {
      error: "Incorrect Ipps number or password.",
    };
  }

  const session = await lucia.createSession(existingUser.id, {
    role: existingUser.user.role || "USER",
  });
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookieStore.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect(
    existingUser.user.isVerified
      ? "/"
      : `/user-verification/${existingUser.id}`,
  );
}
