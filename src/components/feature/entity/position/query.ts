import { useQuery } from "@tanstack/react-query";
import { getAllPositions } from "./action";
import { PositionData } from "@/lib/types";

export const usePositionsQuery =()=>useQuery({
    queryKey: ["positions"],
    queryFn: getAllPositions,
  });

  export const usePositionsWithInitialDataQuery=(initialData:PositionData[])=>useQuery({
      queryKey: ["positions"],
      queryFn: getAllPositions,
      initialData,
      refetchOnWindowFocus: false
    });