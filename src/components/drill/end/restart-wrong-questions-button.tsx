"use client";
import Button from "~/components/common/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContextSelector } from "use-context-selector";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";
import { type QuestionExtendedInfo } from "~/schema";
import { toastSuccess } from "~/components/common/toast-custom";

export const RestartWrongQuestionsButton = () => {
  const router = useRouter();

  const questionContext = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => ({
      selectedQuestions: context?.selectedQuestions,
      setSelectedQuestions: context?.setSelectedQuestions,
    }),
  );

  const { selectedQuestions, setSelectedQuestions } = questionContext;

  if (!selectedQuestions || !setSelectedQuestions) return;

  const onClick = () => {
    const wrongQuestions = selectedQuestions.filter(
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
      setSelectedQuestions(wrongQuestionsReset);
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
