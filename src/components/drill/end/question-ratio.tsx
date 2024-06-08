"use client";
import { QuestionContext } from "~/hooks/question-context";
import { useContext } from "react";
import { getCorrectlyAnsweredNum } from "~/lib/questions";

export const QuestionRatio = () => {
  const questionsContext = useContext(QuestionContext);
  if (!questionsContext) return null;
  const { selectedQuestions } = questionsContext;

  return (
    <p className="text-center text-secondary dark:text-secondaryDark">
      {getCorrectlyAnsweredNum(selectedQuestions)}/{selectedQuestions.length}{" "}
      answered correctly
    </p>
  );
};
