import { Badge } from "@/components/ui/badge";

export function YearContainer({ year }: { year: string | undefined }) {
  const currentYear = new Date().getFullYear();
  return (
    <Badge
      variant={
        Number(year || 0) === currentYear
          ? "success"
          : Number(year || 0) < currentYear
            ? "destructive"
            : "warning"
      }
    >
      {year}
    </Badge>
  );
}
