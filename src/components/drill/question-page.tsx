"use client";
import React, { useEffect, useState } from "react";
import { Question } from "./question";
import { type QuestionExtendedInfo } from "~/schema";
import { useRouter } from "next/navigation";
import {
  getFirstUnanswered,
  getFirstUnansweredAfterIndex,
  getFirstUnansweredWithCurrentQuestionCheck,
} from "~/lib/questions";
import { useContextSelector } from "use-context-selector";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";

type QuestionPageProps = {
  id: string;
};

export const QuestionPage = ({ id }: QuestionPageProps) => {
  const selectedQuestions = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => context?.selectedQuestions,
  );

  const [currentQuestion, setCurrentQuestion] = useState<
    QuestionExtendedInfo | undefined
  >(undefined);

  const router = useRouter();

  useEffect(() => {
    if (selectedQuestions) {
      const questionToSet = selectedQuestions.find(
        (q) => q.order.toString() === id,
      );
      console.log("questionToSet", questionToSet);
      setCurrentQuestion(questionToSet);
    }
  }, [id, selectedQuestions]);

  if (currentQuestion === undefined) {
    return null;
  }

  const onNextQuestionClick = (isCurrentQuestionBeingAnswered = false) => {
    if (!selectedQuestions) {
      return;
    }
    const currentIndex = selectedQuestions.indexOf(currentQuestion);

    let firstUnansweredQuestion = getFirstUnansweredAfterIndex(
      selectedQuestions,
      currentIndex,
    );

    if (!firstUnansweredQuestion) {
      if (isCurrentQuestionBeingAnswered) {
        firstUnansweredQuestion = getFirstUnansweredWithCurrentQuestionCheck(
          selectedQuestions,
          currentQuestion,
        );
      } else {
        firstUnansweredQuestion = getFirstUnanswered(selectedQuestions);
      }
    }

    if (!firstUnansweredQuestion) {
      router.push("/drills/current-drill/end");
      return;
    }

    router.push(`/drills/current-drill/${firstUnansweredQuestion.order}`);
  };

  return (
    <Question
      currentQuestion={currentQuestion}
      onNextQuestionClick={onNextQuestionClick}
    />
  );
};
