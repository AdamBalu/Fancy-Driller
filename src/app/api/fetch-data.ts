import { type Drill, drillSchema } from "~/schema";
import { useQuery } from "@tanstack/react-query";

export const useDrillsQuery = () =>
  useQuery({
    queryKey: ["drillList", "/api/drill"],
    queryFn: getDrills,
  });

const getDrills = async (): Promise<Drill[]> => {
  const response = await fetch("/api/drill", { method: "GET" });
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }
  return await drillSchema.array().parseAsync(await response.json());
};
