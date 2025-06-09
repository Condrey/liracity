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

  const  existingEmployee = await prisma.employee.findUnique({
    where: {
      ippsNumber: ippsNumber.toString(),       
    },
    include: { user: true },
  });
let existingUser = existingEmployee?.user
  if (!existingEmployee||!existingUser) {
    return {
      error: "Incorrect IPPS number or password.",
    };
  }

  const validPassword = await verify(existingUser.passwordHash!, password, {
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
    role: existingUser.role || "USER",
  });
  const sessionCookie = lucia.createSessionCookie(session.id);
  cookieStore.set(
    sessionCookie.name,
    sessionCookie.value,
    sessionCookie.attributes,
  );
  return redirect(
    existingUser.isVerified
      ? "/"
      : `/user-verification/${existingUser.id}`,
  );
}
