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
      className={`!w-full !max-w-screen-xl ${
        selected
          ? "border-correct !text-correct hover:border-correct " +
            "hover:text-correct"
          : "bg-transparent"
      } ${currentQuestion.correct.includes(answer) && currentQuestion.answer !== "none" && "border-correctCard !bg-correctCard !text-white hover:border-correctCard hover:text-white"} 
        ${currentQuestion.wrong.includes(answer) && currentQuestion.answer !== "none" && "border-incorrectCard !bg-incorrectCard !text-white hover:border-incorrectCard hover:text-white"}`}
    >
      {answer}
    </Button>
  );
};
