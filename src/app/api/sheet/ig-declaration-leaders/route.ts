import { getAllIggDeclarations } from "@/app/(home)/(announcements)/announcement/igg-declaration/action";
import { validateRequest } from "@/lib/get-session";
import prisma from "@/lib/prisma";
import { formatDate, subYears } from "date-fns";
import ExcelJS from "exceljs";
import path from "path";

export async function POST(req: Request) {
	const { department } = await req.json();
	const iggDeclarationList = await prisma.iggDeclaration.findMany({ orderBy: { name: "asc" } });
	const { user } = await validateRequest();
	const now = new Date();
	const fullYear = now.getFullYear() + 1;
	// create a new workbook
	const workbook = new ExcelJS.Workbook();
	const sheet = workbook.addWorksheet(`Lira_City_Council_Bi-annual_IG-Declaration_Registration_${fullYear}`);

	// Insert Lira City Logo
	const logoId = workbook.addImage({
		filename: path.join(process.cwd(), "public", "logo.png"),
		extension: "png"
	});
	sheet.addImage(logoId, {
		tl: { col: 0.9, row: 0.1 },
		ext: { width: 95, height: 70 }
	});

	// title: uppercase
	sheet.mergeCells("C1:O1");
	sheet.getCell("C1").value = `606:Lira City Council IG-Declaration Registration List`.toUpperCase();
	sheet.getCell("C1").style = {
		font: { bold: true, size: 18, color: { argb: "0243c4" } },
		alignment: { horizontal: "left", vertical: "middle" }
	};

	// subtitle: black color
	sheet.mergeCells("C2:O2");
	sheet.getCell("C2").value = `Bi-annual IG-Declaration Registration for March ${fullYear}`.toUpperCase();
	sheet.getCell("C2").style = {
		font: { bold: true, size: 16, color: { argb: "000000" } },
		alignment: { horizontal: "left", vertical: "middle" }
	};
	sheet.addRow([]);
	// ---Header Row---
	const headers = ["No.", "Name of leader", "Title", "NIN", "Email", "Phone No."];
	if (!user) {
		sheet.addRow([]);
	}
	const headerRow = sheet.addRow(headers);
	headerRow.eachCell((cell) => {
		cell.fill = {
			type: "pattern",
			pattern: "solid",
			fgColor: { argb: "0243c4" }
		};
		cell.font = { bold: true, color: { argb: "FFFFFFFF" } }; // white text
		cell.border = {
			//   top: { style: "thin" },
			left: { style: "thin" },
			bottom: { style: "thin" },
			right: { style: "thin" }
		};
		cell.alignment = { horizontal: "center", vertical: "middle" };
	});
	//   ---Column widths---
	const colWidths = [5, 25, 40, 20, 35, 15];
	colWidths.forEach((width, i) => {
		const col = i + 1;
		sheet.getColumn(col).width = width;
	});

	// --- The Data ---
	iggDeclarationList.forEach(({ name, email, phoneNumber, nin, title }, index) => {
		const row = sheet.addRow([index + 1, name, title, nin, email, phoneNumber]);
		row.eachCell((cell) => {
			cell.border = {
				top: { style: "thin" },
				left: { style: "thin" },
				bottom: { style: "thin" },
				right: { style: "thin" }
			};
		});
	});

	// --- Freeze Header Row ---
	sheet.views = [{ state: "frozen", ySplit: 4 }];

	// --- Export XLSX ---
	const buffer = await workbook.xlsx.writeBuffer();
	return new Response(Buffer.from(buffer), {
		headers: {
			"Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
			"Content-Disposition": "attachment; filename=Lira_City_Council_Bi-annual_IG-Declaration_Registration.xlsx"
		}
	});
}
