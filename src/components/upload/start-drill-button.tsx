"use client";
import Button from "~/components/common/button";
import { useRouter } from "next/navigation";
import { QuestionContext } from "~/hooks/question-context";
import { useContext } from "react";
import { type QuestionExtendedInfo } from "~/types/question";

export const StartDrillButton = ({ sequential }: { sequential: boolean }) => {
  const router = useRouter();
  const questions = useContext(QuestionContext);
  const questionsContext = useContext(QuestionContext);

  if (questionsContext === null) {
    return null;
  }

  if (questions?.selectedQuestions?.length === 0) {
    return null;
  }

  const shuffle = (array: QuestionExtendedInfo[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j]!, array[i]!];
    }
    return array;
  };

  return (
    <Button
      onClick={() => {
        if (!sequential) {
          questionsContext?.setSelectedQuestions(
            shuffle(questionsContext.selectedQuestions),
          );
        }
        router.push(`/drill/${questionsContext.selectedQuestions[0]!.order}`);
      }}
      className="w-full"
    >
      Start Drill
    </Button>
  );
};
