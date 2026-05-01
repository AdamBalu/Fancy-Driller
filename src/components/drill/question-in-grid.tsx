import { type QuestionExtendedInfo } from "~/schema";
import Link from "next/link";
import { cn } from "~/lib/cn";

export type QuestionProps = {
  question: QuestionExtendedInfo;
  isCurrent?: boolean;
};

export const QuestionInGrid = ({ question, isCurrent }: QuestionProps) => {
  return (
    <Link
      className={cn(
        "rounded-md border-2 p-4 text-center text-secondary transition duration-100 dark:text-secondaryDark",
        question.answer === "none" &&
          "border-secondary dark:border-secondaryDark",
        question.answer === "correct" &&
          "border-correct bg-correct/10 text-correct shadow-lg shadow-correct/20 dark:bg-correct/20 dark:shadow-correct/50",
        question.answer === "wrong" &&
          "border-incorrect bg-incorrect/10 text-incorrect shadow-lg shadow-incorrect/20 dark:bg-incorrect/20 dark:shadow-incorrect/50",
        "hover:border-border hover:text-border dark:hover:border-borderDark dark:hover:text-borderDark",
        isCurrent &&
          "scale-110 border-primary bg-primary/10 font-bold text-primary shadow-lg shadow-primary/20 dark:border-primaryDark dark:bg-primaryDark/10 dark:text-primaryDark dark:shadow-primaryDark/20",
      )}
      href={`/drills/current-drill/${question.order}`}
    >
      {question.order}
    </Link>
  );
};
