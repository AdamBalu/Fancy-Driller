import Button from "~/components/common/button";
import { useContext, useState } from "react";
import { type QuestionExtendedInfo } from "~/schema";
import { QuestionContext } from "~/hooks/question-context";
import { toastError, toastSuccess } from "../common/toast-custom";

type AnswerButtonProps = {
  answer: string;
  selectedAnswersState: [string[], (value: string[]) => void];
  currentQuestion: QuestionExtendedInfo;
  onNextQuestionClick: (v: boolean) => void;
};

export const AnswerButton = ({
  answer,
  selectedAnswersState,
  currentQuestion,
  onNextQuestionClick,
}: AnswerButtonProps) => {
  const questionContext = useContext(QuestionContext);
  const [selectedAnswers, setSelectedAnswers] = selectedAnswersState;
  const [selected, setSelected] = useState(false);
  if (questionContext === null) {
    return;
  }
  const onClick = () => {
    const newSelectedAnswers = [...selectedAnswers, answer];
    if (!selected) {
      setSelectedAnswers(newSelectedAnswers);
    } else {
      setSelectedAnswers(selectedAnswers.filter((item) => item !== answer));
    }
    setSelected(!selected);

    if (questionContext.fastMode) {
      const isAnswerWrong = newSelectedAnswers.some((answer) =>
        currentQuestion.wrong.includes(answer),
      );
      const isAnswerCorrect =
        !isAnswerWrong &&
        currentQuestion.correct.every((correctAnswer) =>
          newSelectedAnswers.includes(correctAnswer),
        );

      if (isAnswerCorrect) {
        questionContext.setQuestion(currentQuestion, "correct");
        onNextQuestionClick(true);
        toastSuccess("Correct!");
      } else if (isAnswerWrong) {
        questionContext.setQuestion(currentQuestion, "wrong");
        onNextQuestionClick(true);
        toastError("Wrong");
      }
    }
  };

  return (
    <Button
      onClick={onClick}
      disabled={currentQuestion.answer !== "none"}
      className={`!w-full !max-w-screen-xl border-2 border-selectedCard transition duration-200 hover:bg-primaryCard hover:text-secondary dark:hover:text-primaryDark ${
        selected
          ? "border-selectedCard bg-selectedCard hover:border-selected hover:bg-selectedCard hover:text-secondary dark:border-selectedCardDark dark:bg-selectedCardDark dark:hover:border-selectedDark dark:hover:text-secondaryDark"
          : "bg-transparent"
      } ${currentQuestion.correct.includes(answer) && currentQuestion.answer !== "none" && "border-correctCard !bg-correctCard text-onAnsweredButton hover:border-correctCard hover:!text-onAnsweredButton dark:!border-correctCardDark dark:!bg-correctCardDark"} 
        ${currentQuestion.wrong.includes(answer) && currentQuestion.answer !== "none" && "border-incorrectCard !bg-incorrectCard text-onAnsweredButton hover:border-incorrectCard hover:!text-onAnsweredButton dark:!border-incorrectCardDark dark:!bg-incorrectCardDark"}`}
    >
      {answer}
    </Button>
  );
};
