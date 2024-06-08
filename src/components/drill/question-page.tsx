"use client";
import React, { useContext, useEffect, useState } from "react";
import { QuestionContext } from "~/hooks/question-context";
import { Question } from "./question";
import { type QuestionExtendedInfo } from "~/schema";
import { useRouter } from "next/navigation";
import {
  getFirstUnanswered,
  getFirstUnansweredAfterIndex,
} from "~/lib/questions";

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
    const { selectedQuestions } = questionsContext;
    const currentIndex = selectedQuestions.indexOf(currentQuestion);

    let firstUnansweredQuestion = getFirstUnansweredAfterIndex(
      selectedQuestions,
      currentIndex,
    );

    if (!firstUnansweredQuestion) {
      firstUnansweredQuestion = getFirstUnanswered(selectedQuestions);
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
