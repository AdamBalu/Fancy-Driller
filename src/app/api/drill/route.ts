import { ZodError } from "zod";
import { readDrills } from "~/server/drill";

export const GET = async () => {
  try {
    const drills = await readDrills();

    return Response.json(drills);
  } catch (error) {
    console.log(error);

    if (error instanceof ZodError) {
      return Response.json({ error: error.errors }, { status: 400 });
    }

    return Response.json({ error: "Something went wrong" }, { status: 500 });
  }
};
