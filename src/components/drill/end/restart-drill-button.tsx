"use client";
import Button from "~/components/common/button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { QuestionContext } from "~/hooks/question-context";

export const RestartDrillButton = () => {
  const router = useRouter();
  const questionContext = useContext(QuestionContext);
  if (!questionContext) {
    return null;
  }

  const onClick = () => {
    questionContext.setSelectedQuestions(questionContext.initialQuestions);
    router.push(`/drills/${questionContext.currentDrillName}`);
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
