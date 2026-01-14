import React from "react";
import { type Metadata } from "next";
import PublicDrills from "~/components/drills/public-drills";

export const metadata: Metadata = {
  title: "Drills",
};

const DrillsPage = async () => (
  <div className="my-10">
    <PublicDrills />
  </div>
);
export default DrillsPage;
