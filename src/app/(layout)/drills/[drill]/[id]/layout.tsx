"use client";
import React from "react";
import ProgressBar from "~/components/common/progress-bar";
import { getAnsweredNum } from "~/lib/questions";
import { useContextSelector } from "use-context-selector";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const selectedQuestions = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => context?.selectedQuestions,
  );

  if (!selectedQuestions) return null;

  return (
    <>
      <ProgressBar
        value={getAnsweredNum(selectedQuestions)}
        max={selectedQuestions.length}
      />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
};

export default Layout;
