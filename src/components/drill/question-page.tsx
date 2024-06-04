"use client";
import React, { useContext, useEffect, useState } from "react";
import { QuestionContext } from "~/hooks/question-context";
import { Question } from "./question";
import { type QuestionExtendedInfo } from "~/types/question";
import { useRouter } from "next/navigation";

type QuestionPageProps = {
  id: string;
};

export const QuestionPage = ({ id }: QuestionPageProps) => {
  const questionsContext = useContext(QuestionContext);
  const [currentQuestion, setCurrentQuestion] = useState<
    QuestionExtendedInfo | undefined
  >(undefined);

  const router = useRouter();

  useEffect(() => {
    setCurrentQuestion(
      questionsContext?.selectedQuestions.find(
        (item) => item.order.toString() === id,
      ),
    );
  }, [id, questionsContext?.selectedQuestions]);

  if (questionsContext === null) {
    return null;
  }

  if (currentQuestion === undefined) {
    return null;
  }

  const onNextQuestionClick = () => {
    const nextQuestion =
      questionsContext.selectedQuestions[
        questionsContext.selectedQuestions.indexOf(currentQuestion) + 1
      ];

    if (nextQuestion === undefined) {
      router.push("/drill");
      return;
    }

    router.push(`/drill/${nextQuestion.order.toString()}`);
  };

  return (
    <Question
      currentQuestion={currentQuestion}
      onNextQuestionClick={onNextQuestionClick}
    />
  );
};
