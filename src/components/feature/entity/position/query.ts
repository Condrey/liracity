import { useQuery } from "@tanstack/react-query";
import { getAllPositions } from "./action";

export const usePositionsQuery =()=>useQuery({
    queryKey: ["positions"],
    queryFn: getAllPositions,
  });