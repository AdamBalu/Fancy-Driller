"use client";
import { useContextSelector } from "use-context-selector";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";

import { QuestionInGrid } from "~/components/drill/question-in-grid";

export const QuestionGrid = () => {
  const selectedQuestions = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => context?.selectedQuestions,
  );

  if (selectedQuestions === undefined) {
    return null;
  }

  return (
    <div className="mb-40 mt-8 grid grid-cols-4 gap-4 md:grid-cols-8 lg:grid-cols-10">
      {selectedQuestions?.map((question, index) => {
        return (
          <QuestionInGrid key={question.question + index} question={question} />
        );
      })}
    </div>
  );
};
