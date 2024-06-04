import React from "react";
import { type Metadata } from "next";
import { QuestionGrid } from "~/components/drill/question-grid";

export const metadata: Metadata = {
  title: "Drill",
};

const DrillsPage = async () => {
  return <QuestionGrid />;
};

export default DrillsPage;
