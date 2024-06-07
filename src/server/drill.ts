import { promises as fs } from "fs";
import z from "zod";
import { drillSchema } from "~/schema";
import * as path from "node:path";

const parseDrills = (input: string) =>
  z.array(drillSchema).parse(JSON.parse(input || "[]"));

export const readDrills = async () => {
  try {
    const filePath = path.join(process.cwd(), "public", "drills.json");
    const file = await fs.readFile(filePath, "utf8");

    return parseDrills(file || "[]");
  } catch (error) {
    return parseDrills("[]");
  }
};
