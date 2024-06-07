import React from "react";
import { type Metadata } from "next";
import { DrillContent } from "~/components/drill/drill-content";

export const metadata: Metadata = {
  title: "Drill",
};

type DrillProps = {
  params: { drill: string };
};

const Page = async ({ params }: DrillProps) => {
  return (
    <DrillContent
      drillName={params.drill}
      calledFromCustomDrill={params.drill === "custom-drill"}
    />
  );
};

export default Page;
