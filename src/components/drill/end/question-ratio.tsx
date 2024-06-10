"use client";
import { getCorrectlyAnsweredNum } from "~/lib/questions";
import { useContextSelector } from "use-context-selector";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";

export const QuestionRatio = () => {
  const questionsContext = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => ({
      selectedQuestions: context?.selectedQuestions,
    }),
  );
  if (!questionsContext?.selectedQuestions) return null;

  const { selectedQuestions } = questionsContext;

  return (
    <p className="text-center text-secondary dark:text-secondaryDark">
      {getCorrectlyAnsweredNum(selectedQuestions)}/{selectedQuestions.length}{" "}
      answered correctly
    </p>
  );
};
