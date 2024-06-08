"use client";
import React from "react";
import ProgressBar from "~/components/common/progress-bar";
import { QuestionContext } from "~/hooks/question-context";
import { getAnsweredNum } from "~/lib/questions";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const questionsContext = React.useContext(QuestionContext);
  if (!questionsContext) return null;
  const { selectedQuestions } = questionsContext;

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
