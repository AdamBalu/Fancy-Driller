"use client";
import Button from "~/components/common/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { QuestionContext } from "~/hooks/question-context";
import { type QuestionExtendedInfo } from "~/schema";
import { toastSuccess } from "~/components/common/toast-custom";

export const RestartWrongQuestionsButton = () => {
  const router = useRouter();
  const questionContext = useContext(QuestionContext);
  if (!questionContext) {
    return null;
  }

  const onClick = () => {
    const wrongQuestions = questionContext.selectedQuestions.filter(
      (q) => q.answer === "wrong",
    );
    const wrongQuestionsReset: QuestionExtendedInfo[] = wrongQuestions.map(
      (q) => {
        return {
          ...q,
          answer: "none",
        };
      },
    );

    if (wrongQuestionsReset.length === 0) {
      toastSuccess("All questions answered correctly!", 2500);
    } else {
      questionContext.setSelectedQuestions(wrongQuestionsReset);
      router.push(`/drills/current-drill/${wrongQuestionsReset[0]?.order}`);
    }
  };
  return (
    <Button
      className="group flex h-[80px] w-[80px] items-center justify-center rounded-full p-2"
      onClick={onClick}
    >
      <Image
        src="/static/restart-wrong-questions-drill.svg"
        alt="restart drill"
        width={110}
        height={110}
        className="transition duration-1000 hover:rotate-[270deg]"
      />
    </Button>
  );
};
