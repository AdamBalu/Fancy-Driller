import Button from "~/components/common/button";
import { useState } from "react";
import { type QuestionExtendedInfo } from "~/types/question";

type AnswerButtonProps = {
  answer: string;
  selectedAnswersState: [string[], (value: string[]) => void];
  currentQuestion: QuestionExtendedInfo;
};

export const AnswerButton = ({
  answer,
  selectedAnswersState,
  currentQuestion,
}: AnswerButtonProps) => {
  const [selectedAnswers, setSelectedAnswers] = selectedAnswersState;
  const [selected, setSelected] = useState(false);

  return (
    <Button
      onClick={() => {
        if (!selected) {
          setSelectedAnswers([...selectedAnswers, answer]);
        } else {
          setSelectedAnswers(selectedAnswers.filter((item) => item !== answer));
        }
        setSelected(!selected);
      }}
      className={`!w-full !max-w-screen-xl ${
        selected
          ? "border-correct !text-correct hover:border-correct " +
            "hover:text-correct"
          : "bg-transparent"
      } ${currentQuestion.correct.includes(answer) && currentQuestion.answer !== "none" && "!bg-correctCard hover:border-correctCard border-correctCard !text-white hover:text-white"} 
        ${currentQuestion.wrong.includes(answer) && currentQuestion.answer !== "none" && "!bg-incorrectCard hover:border-incorrectCard border-incorrectCard !text-white hover:text-white"}`}
    >
      {answer}
    </Button>
  );
};
