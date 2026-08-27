import { MissingInformationContainer } from "@/components/query-containers/other-containers";
import { EmployeeData } from "@/lib/types";

interface Props {
	employee: EmployeeData | null;
}

export default function DataCellCurrentPosition({ employee }: Props) {
	if (!employee) return <MissingInformationContainer />;
	const { currentPosition } = employee;
	return <>{!currentPosition ? <MissingInformationContainer /> : <div>{currentPosition.jobTitle}</div>}</>;
}
