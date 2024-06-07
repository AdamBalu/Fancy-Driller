import { type QuestionExtendedInfo } from "~/schema";
import Link from "next/link";

export type QuestionProps = {
  question: QuestionExtendedInfo;
};

export const QuestionInGrid = ({ question }: QuestionProps) => {
  return (
    <Link
      className={`rounded-md border-2 p-4 text-center text-secondary transition duration-100 dark:text-secondaryDark 
      ${question.answer === "none" && "border-secondary dark:border-secondaryDark"} 
      ${question.answer === "correct" && "border-correct"} 
      ${question.answer === "wrong" && "border-incorrect"} dark:hover:border-borderDark dark:hover:text-borderDark hover:border-border hover:text-border`}
      href={`/drills/current-drill/${question.order}`}
    >
      {question.order}
    </Link>
  );
};
