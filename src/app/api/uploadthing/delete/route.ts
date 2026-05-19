import { NextResponse } from "next/server";
import { utAPi } from "../route";

export async function POST(req: Request) {
	try {
		const body = await req.json();

		const { fileKey } = body;

		if (!fileKey) {
			return NextResponse.json({ error: "Missing fileKey" }, { status: 400 });
		}

		await utAPi.deleteFiles(fileKey);

		return NextResponse.json({
			success: true
		});
	} catch (error) {
		console.error(error);

		return NextResponse.json({ error: "Failed to delete file" }, { status: 500 });
	}
}
