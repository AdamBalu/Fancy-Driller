"use client";
import Button from "~/components/common/button";
import { useRouter } from "next/navigation";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";
import { type QuestionExtendedInfo } from "~/schema";
import { useContextSelector } from "use-context-selector";

type StartDrillButtonProps = {
  sequential: boolean;
  providedQuestions?: QuestionExtendedInfo[];
};

export const StartDrillButton = ({
  sequential,
  providedQuestions,
}: StartDrillButtonProps) => {
  const router = useRouter();
  const questionsContext = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => ({
      selectedQuestions: context?.selectedQuestions,
      setSelectedQuestions: context?.setSelectedQuestions,
    }),
  );

  if (!questionsContext) return null;

  const { selectedQuestions, setSelectedQuestions } = questionsContext;

  if (!selectedQuestions || !setSelectedQuestions) return null;

  const shuffle = (array: QuestionExtendedInfo[]) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j]!, array[i]!];
    }
    return array;
  };

  const finalQuestions = providedQuestions ?? selectedQuestions;

  return (
    <Button
      onClick={() => {
        setSelectedQuestions(
          sequential ? finalQuestions : shuffle(finalQuestions),
        );
        router.push(`/drills/current-drill/${finalQuestions[0]?.order}`);
      }}
      className="w-[70dvw] sm:w-[90dvw]"
    >
      Start Drill
    </Button>
  );
};
