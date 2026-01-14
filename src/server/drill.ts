import { promises as fs } from "fs";
import z from "zod";
import { drillSchema } from "~/schema";
import * as path from "node:path";

const parseDrills = (input: string) =>
  z.array(drillSchema).parse(JSON.parse(input || "[]"));

export const readDrills = async () => {
  try {
    const drillsDir = path.join(process.cwd(), "public", "drills");
    const files = await fs.readdir(drillsDir);

    const jsonFiles = files.filter((file) => file.endsWith(".json"));

    const drillPromises = jsonFiles.map(async (file) => {
      try {
        const filePath = path.join(drillsDir, file);
        const fileContent = await fs.readFile(filePath, "utf8");
        const parsed = drillSchema.parse(JSON.parse(fileContent || "{}"));
        return parsed;
      } catch (error) {
        console.error(`Error reading drill file ${file}:`, error);
        return null;
      }
    });

    const drills = await Promise.all(drillPromises);

    // Filter out any null values from failed parses
    const allDrills = drills.filter(
      (drill): drill is z.infer<typeof drillSchema> => drill !== null,
    );

    return allDrills;
  } catch (error) {
    console.error("Error reading drills directory:", error);
    return parseDrills("[]");
  }
};
