"use client";
import Button from "~/components/common/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContextSelector } from "use-context-selector";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";

export const RestartDrillButton = () => {
  const router = useRouter();

  const questionContext = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => ({
      setSelectedQuestions: context?.setSelectedQuestions,
      initialQuestions: context?.initialQuestions,
      currentDrillName: context?.currentDrillName,
    }),
  );

  if (!questionContext) return;

  const { setSelectedQuestions, initialQuestions, currentDrillName } =
    questionContext;
  if (!setSelectedQuestions || !initialQuestions || !currentDrillName) return;

  const onClick = () => {
    setSelectedQuestions(initialQuestions);
    router.push(`/drills/${currentDrillName}`);
  };

  return (
    <Button
      className="group flex h-[80px] w-[80px] items-center justify-center rounded-full p-4"
      onClick={onClick}
    >
      <Image
        src="/static/restart-drill.svg"
        alt="restart drill"
        width={60}
        height={60}
        className="transition duration-1000 hover:rotate-[270deg]"
      />
    </Button>
  );
};
