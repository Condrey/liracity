import { Role } from "@/generated/prisma";

const allRoles = Object.values(Role);
export const myPrivileges: Record<Role, Role[]> = {
    
    ADMIN: allRoles,
    MODERATOR: allRoles.filter((role) => role !== Role.ADMIN),
    USER: [],
}