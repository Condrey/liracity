import { useQuery } from "@tanstack/react-query";
import { getAllDepartmentalSections } from "./action";

export const useDepartmentalSectionsQuery =()=>useQuery({
    queryKey: ["departmentalSections"],
    queryFn: getAllDepartmentalSections,
  });