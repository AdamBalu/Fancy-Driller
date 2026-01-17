import React, { useEffect, useState } from "react";
import { AnswerButton } from "./answer-button";
import Button from "../common/button";
import { type QuestionExtendedInfo } from "~/schema";
import { toastError, toastSuccess } from "~/components/common/toast-custom";
import { useContextSelector } from "use-context-selector";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";
import { cn } from "~/lib/cn";

type QuestionProps = {
  currentQuestion: QuestionExtendedInfo;
  onNextQuestionClick: () => void;
};

export const Question = ({
  currentQuestion,
  onNextQuestionClick,
}: QuestionProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[] | null>(null);

  const questionsContext = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => ({
      setQuestion: context?.setQuestion,
      fastMode: context?.fastMode,
    }),
  );

  useEffect(() => {
    if (!shuffledAnswers) {
      const shuffle = (array: string[]) => {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j]!, array[i]!];
        }
        return array;
      };

      const mergedAnswers = shuffle([
        ...currentQuestion.correct,
        ...currentQuestion.wrong,
      ]);
      setShuffledAnswers(mergedAnswers);
    }
  }, [currentQuestion, shuffledAnswers]);

  if (!questionsContext) return;
  const { setQuestion, fastMode } = questionsContext;
  if (!setQuestion) return;

  const checkCorrectAnswers = () => {
    const wasAnsweredCorrectly =
      currentQuestion.correct.every((correctAnswer) =>
        selectedAnswers.includes(correctAnswer),
      ) &&
      currentQuestion.wrong.every(
        (wrongAnswer) => !selectedAnswers.includes(wrongAnswer),
      );
    setQuestion(currentQuestion, wasAnsweredCorrectly ? "correct" : "wrong");

    wasAnsweredCorrectly && toastSuccess("Correct!");
    !wasAnsweredCorrectly && toastError("Wrong");
  };

  const isTable = currentQuestion.question
    .split("\n")
    .some((line) => line.trim().startsWith("|"));

  return (
    <div className="mx-2 flex min-h-[calc(100dvh-68px)] w-[90dvw] max-w-screen-md flex-col items-center justify-center gap-2 sm:mx-4 sm:w-[70dvw] sm:gap-5">
      <h2
        className={cn(
          "text-md w-max max-w-[min(90dvw,1200px)] overflow-scroll pb-5 font-bold text-secondary transition-color duration-500 ease-in-out dark:text-secondaryDark sm:text-xl md:text-2xl",
          isTable
            ? "whitespace-pre text-left font-mono"
            : "whitespace-pre-wrap text-center",
        )}
      >
        {currentQuestion.question}
      </h2>
      {shuffledAnswers?.map((answer) => (
        <AnswerButton
          key={answer}
          answer={answer}
          selectedAnswersState={[selectedAnswers, setSelectedAnswers]}
          currentQuestion={currentQuestion}
          onNextQuestionClick={onNextQuestionClick}
        />
      ))}

      {currentQuestion.answer === "none" && !fastMode && (
        <Button onClick={checkCorrectAnswers} className="mt-10 w-full">
          Check
        </Button>
      )}

      {currentQuestion.answer !== "none" && !fastMode && (
        <Button onClick={onNextQuestionClick} className="mt-10 w-full">
          Next Question
        </Button>
      )}
    </div>
  );
};
