"use client";
import React from "react";
import ProgressBar from "~/components/common/progress-bar";
import { QuestionContext } from "~/hooks/question-context";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const questionsContext = React.useContext(QuestionContext);
  if (questionsContext === null) {
    return null;
  }
  return (
    <>
      <ProgressBar
        value={
          (questionsContext.selectedQuestions.filter((q) => q.answer !== "none")
            .length /
            questionsContext.selectedQuestions.length) *
          100
        }
        max={questionsContext.selectedQuestions.length}
      />
      <div className="flex flex-col items-center justify-center">
        {children}
      </div>
    </>
  );
};

export default Layout;
