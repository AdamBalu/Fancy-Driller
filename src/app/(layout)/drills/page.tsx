import React from "react";
import { type Metadata } from "next";
import PublicDrills from "~/components/drills/public-drills";
import PageHeader from "~/components/common/page-header";

export const metadata: Metadata = {
  title: "Drills",
};

const DrillsPage = async () => (
  <div className="flex min-h-[calc(100dvh-68px)] flex-col items-center justify-center gap-8 py-10">
    <PageHeader title="Drill Library" subtitle="Public question sets" />
    <PublicDrills />
  </div>
);
export default DrillsPage;
