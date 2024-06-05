import Button from "~/components/common/button";
import { useContext, useState } from "react";
import { type QuestionExtendedInfo } from "~/types/question";
import { QuestionContext } from "~/hooks/question-context";
import { toastError, toastSuccess } from "../common/toast-custom";

type AnswerButtonProps = {
  answer: string;
  selectedAnswersState: [string[], (value: string[]) => void];
  currentQuestion: QuestionExtendedInfo;
  onNextQuestionClick: () => void;
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
        onNextQuestionClick();
        toastSuccess("Correct!");
      } else if (isAnswerWrong) {
        questionContext.setQuestion(currentQuestion, "wrong");
        onNextQuestionClick();
        toastError("Wrong");
      }
    }
  };

  return (
    <Button
      onClick={onClick}
      disabled={currentQuestion.answer !== "none"}
      className={`hover:bg-primaryCard !w-full !max-w-screen-xl hover:!text-secondary ${
        selected
          ? "border-selectedCard bg-selectedCard hover:border-selected hover:bg-selectedCard hover:text-secondary"
          : "bg-transparent"
      } ${currentQuestion.correct.includes(answer) && currentQuestion.answer !== "none" && "!border-correctCard !bg-correctCard !text-secondary hover:border-correctCard hover:text-secondary"} 
        ${currentQuestion.wrong.includes(answer) && currentQuestion.answer !== "none" && "!border-incorrectCard !bg-incorrectCard !text-secondary hover:border-incorrectCard hover:text-secondary"}`}
    >
      {answer}
    </Button>
  );
};
