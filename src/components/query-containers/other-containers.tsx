export function MissingInformationContainer({ info }: { info?: string }) {
	return <div className="font-bold text-destructive italic">{info || "Information missing"}</div>;
}
