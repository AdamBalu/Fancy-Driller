"use client";
import type { Question, QuestionExtendedInfo } from "~/types/question";
import { QuestionContext } from "~/hooks/question-context";
import { useContext } from "react";
import Button from "~/components/common/button";
import { useRouter } from "next/navigation";

export const PublicDrill = ({ drill }: { drill: string }) => {
  const questionsContext = useContext(QuestionContext);
  const router = useRouter();

  if (questionsContext === null) {
    return null;
  }

  const onButtonClick = () => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const questions: Question[] = JSON.parse(drill);
    const q: QuestionExtendedInfo[] = questions.map((question, index) => {
      console.log("Question:", question);
      return {
        ...question,
        order: index + 1,
        answer: "none",
      };
    });
    questionsContext?.setSelectedQuestions(q);

    router.push(`/upload`);
  };

  return (
    <Button onClick={onButtonClick}>
      <div className="flex w-48 flex-col">
        <p>PA179</p>
        72 questions
      </div>
    </Button>
  );
};
