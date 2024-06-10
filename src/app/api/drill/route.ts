import { ZodError } from "zod";
import { readDrills } from "~/server/drill";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const drills = await readDrills();

    return NextResponse.json(drills);
  } catch (error) {
    if (error instanceof ZodError) {
      return NextResponse.json({ error: error.errors }, { status: 400 });
    }

    return NextResponse.json(
      { error: "Something went wrong" },
      { status: 500 },
    );
  }
};
