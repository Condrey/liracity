import { MissingInformationContainer } from "@/components/query-containers/other-containers";
import { EmployeeData } from "@/lib/types";

interface Props {
	employee: EmployeeData | null;
}

export default function DataCellAssumedOffice({ employee }: Props) {
	if (!employee || !employee.assumedOffice) return <MissingInformationContainer />;
	const { assumedOffice, endedOffice } = employee;
	return <div>{`${assumedOffice}-${endedOffice ?? "NOW"}`}</div>;
}
