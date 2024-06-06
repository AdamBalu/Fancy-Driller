import React from "react";
import { type Metadata } from "next";
import { DrillContent } from "~/components/upload/drill-content";

export const metadata: Metadata = {
  title: "Drill",
};

type DrillProps = {
  params: { drill: string };
};

const Page = async ({ params }: DrillProps) => {
  return <DrillContent drillName={params.drill} />;
};

export default Page;
