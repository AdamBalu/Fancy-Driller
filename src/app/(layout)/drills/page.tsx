import React from "react";
import { type Metadata } from "next";
import { DrillGrid } from "~/components/drills/drill-grid";

export const metadata: Metadata = {
  title: "Drills",
};

const DrillsPage = async () => {
  return <DrillGrid />;
};
export default DrillsPage;
