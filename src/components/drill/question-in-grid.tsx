import { type QuestionExtendedInfo } from "~/types/question";
import Link from "next/link";

export type QuestionProps = {
  question: QuestionExtendedInfo;
};

export const QuestionInGrid = ({ question }: QuestionProps) => {
  return (
    <Link
      className={`rounded-md border-2 p-4 text-center ${question.answer === "none" && "border-secondary"} ${question.answer === "correct" && "border-correct"} ${question.answer === "wrong" && "border-incorrect"} hover:border-border hover:text-border`}
      href={`/drill/${question.order}`}
    >
      {question.order}
    </Link>
  );
};
