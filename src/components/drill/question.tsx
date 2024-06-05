import React, { useContext, useEffect, useState } from "react";
import { AnswerButton } from "./answer-button";
import Button from "../common/button";
import { type QuestionExtendedInfo } from "~/types/question";
import { QuestionContext } from "~/hooks/question-context";

type QuestionProps = {
  currentQuestion: QuestionExtendedInfo;
  onNextQuestionClick: () => void;
};

export const Question = ({
  currentQuestion,
  onNextQuestionClick,
}: QuestionProps) => {
  const questionContext = useContext(QuestionContext);
  const [selectedAnswers, setSelectedAnswers] = useState<string[]>([]);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[] | null>(null);

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

  if (questionContext === null) {
    return null;
  }
  const checkCorrectAnswers = () => {
    const wasAnsweredCorrectly =
      currentQuestion.correct.every((correctAnswer) =>
        selectedAnswers.includes(correctAnswer),
      ) &&
      currentQuestion.wrong.every(
        (wrongAnswer) => !selectedAnswers.includes(wrongAnswer),
      );
    questionContext.setQuestion(
      currentQuestion,
      wasAnsweredCorrectly ? "correct" : "wrong",
    );
  };

  return (
    <div className="mx-4 flex min-h-[calc(100dvh-68px)] w-[90dvw] max-w-screen-md flex-col items-center justify-center gap-5 sm:w-[70dvw]">
      <h1 className="text-md pb-5 text-center font-bold sm:text-xl md:text-2xl">
        {currentQuestion.question}
      </h1>
      {/*<p className="text-center text-sm">*/}
      {/*  {currentQuestion.answer === "correct" && (*/}
      {/*    <span className="-translate-y-2 font-bold text-correct transition duration-200">*/}
      {/*      Correct!*/}
      {/*    </span>*/}
      {/*  )}*/}
      {/*  {currentQuestion.answer === "wrong" && (*/}
      {/*    <span className="-translate-y-2 font-bold text-incorrect transition duration-200">*/}
      {/*      Incorrect*/}
      {/*    </span>*/}
      {/*  )}*/}
      {/*</p>*/}
      {shuffledAnswers?.map((answer) => (
        <AnswerButton
          key={answer}
          answer={answer}
          selectedAnswersState={[selectedAnswers, setSelectedAnswers]}
          currentQuestion={currentQuestion}
          onNextQuestionClick={onNextQuestionClick}
        />
      ))}

      {currentQuestion.answer === "none" && !questionContext.fastMode && (
        <Button onClick={checkCorrectAnswers} className="mt-10 w-full">
          Check
        </Button>
      )}

      {currentQuestion.answer !== "none" && !questionContext.fastMode && (
        <Button onClick={onNextQuestionClick} className="mt-10 w-full">
          Next Question
        </Button>
      )}
    </div>
  );
};
