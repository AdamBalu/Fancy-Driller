import React from "react";
import { type Metadata } from "next";
import PublicDrills from "~/components/drills/public-drills";

export const metadata: Metadata = {
  title: "Drills",
};

const DrillsPage = async () => (
  <div className="flex min-h-[calc(100dvh-68px)] items-center justify-center py-10">
    <PublicDrills />
  </div>
);
export default DrillsPage;
