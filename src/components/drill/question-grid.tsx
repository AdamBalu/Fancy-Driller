"use client";
import { QuestionContext } from "~/hooks/question-context";
import { useContext } from "react";
import { QuestionInGrid } from "~/components/drill/question-in-grid";

export const QuestionGrid = () => {
  const questionsContext = useContext(QuestionContext);
  if (questionsContext === null) {
    return null;
  }
  return (
    <div className="mb-40 mt-8 grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-10">
      {questionsContext.selectedQuestions?.map((question) => {
        return <QuestionInGrid key={question.order} question={question} />;
      })}
    </div>
  );
};
