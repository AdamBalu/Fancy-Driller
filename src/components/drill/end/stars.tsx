"use client";
import React from "react";
import Image from "next/image";
import Transition from "~/components/common/transition";
import { getCorrectlyAnsweredNum } from "~/lib/questions";
import { useContextSelector } from "use-context-selector";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";
import { Great_Vibes } from "next/font/google";
import TransitionOpacity from "~/components/common/transition-opacity";

const GreatVibes = Great_Vibes({ subsets: ["latin"], weight: ["400"] });

export const Stars = () => {
  const questionContext = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => ({
      selectedQuestions: context?.selectedQuestions,
    }),
  );

  const oneStarPercentage = 0.3;
  const twoStarPercentage = 0.6;
  const threeStarPercentage = 0.9;

  if (!questionContext) return null;
  const { selectedQuestions } = questionContext;
  if (!selectedQuestions) return null;

  const allQuestions =
    selectedQuestions.length === 0 ? 1 : selectedQuestions.length;

  const correctAnswerPercentage =
    getCorrectlyAnsweredNum(selectedQuestions) / allQuestions;

  return (
    <div className="flex flex-col">
      <div className="mb-10 mt-20 flex flex-row gap-8">
        <Star
          delaySeconds={0.3}
          duration={0.55}
          percentage={correctAnswerPercentage}
          starRequirementPercentage={oneStarPercentage}
          className="-rotate-[20deg]"
        />
        <Star
          delaySeconds={0.8}
          duration={0.55}
          percentage={correctAnswerPercentage}
          starRequirementPercentage={twoStarPercentage}
          className="mt-[-1.7rem]"
        />
        <Star
          delaySeconds={1.3}
          duration={0.25}
          percentage={correctAnswerPercentage}
          starRequirementPercentage={threeStarPercentage}
          className="rotate-[20deg]"
        />
      </div>
      {correctAnswerPercentage === 1 && (
        <TransitionOpacity delaySeconds={2.2} duration={0.6}>
          <h2
            className={`mt-[-2rem] animate-bounce text-4xl font-bold text-primary dark:text-primaryDark ${GreatVibes.className}`}
          >
            Perfect!
          </h2>
        </TransitionOpacity>
      )}
    </div>
  );
};

const Star = ({
  percentage,
  delaySeconds,
  duration,
  starRequirementPercentage,
  className,
}: {
  percentage: number;
  delaySeconds: number;
  duration: number;
  starRequirementPercentage: number;
  className?: string;
}) => {
  return (
    <Transition delaySeconds={delaySeconds} duration={duration}>
      {percentage >= starRequirementPercentage && (
        <Image
          src="/static/star-no-shadow.svg"
          alt="star"
          width={90}
          height={90}
          className={className}
        />
      )}
      {percentage < starRequirementPercentage && (
        <Image
          src="/static/star-empty-no-shadow.svg"
          alt="star"
          width={90}
          height={90}
          className={className}
        />
      )}
    </Transition>
  );
};
