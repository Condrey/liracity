import prisma from "@/lib/prisma";
import { staffLoginSchema } from "@/lib/validation"
import { verify } from "@node-rs/argon2";

export async function POST(req:Request){
    try {
                const errorMsg='"Incorrect IPPS number or password."'

        const body = await req.json()
        const {ippsNumber,password} = staffLoginSchema.parse(body)
        const existingEmployee = await prisma.employee.findUnique({
		where: {
			ippsNumber: ippsNumber.toString()
		},
		include: { user: true }
	});
	let existingUser = existingEmployee?.user;
    if (!existingEmployee || !existingUser) {
		return Response.json(errorMsg,{status:401,statusText:errorMsg})
	}
    const validPassword = await verify(existingUser.passwordHash!, password, {
		memoryCost: 19456,
		timeCost: 2,
		outputLen: 32,
		parallelism: 1
	});
if (!validPassword) {
				return Response.json(errorMsg,{status:401,statusText:errorMsg})

	}
    return Response.json(existingUser,{status:200,statusText:'Successfully matched ippsNumber'})
    } catch (error) {
        console.error('Server error: ',error)
        return Response.json({error:'Internal server error'},{status:500,statusText:'Internal server error.'})
    }
}