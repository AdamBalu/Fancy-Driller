"use client";
import React, { useContext } from "react";
import Image from "next/image";
import { QuestionContext } from "~/hooks/question-context";
import Transition from "~/components/common/transition";
import { getCorrectlyAnsweredNum } from "~/lib/questions";

export const Stars = () => {
  const questionContext = useContext(QuestionContext);
  const oneStarPercentage = 0.3;
  const twoStarPercentage = 0.6;
  const threeStarPercentage = 0.9;

  if (!questionContext) return null;
  const { selectedQuestions } = questionContext;

  const allQuestions =
    selectedQuestions.length === 0 ? 1 : selectedQuestions.length;

  const correctAnswerPercentage =
    getCorrectlyAnsweredNum(selectedQuestions) / allQuestions;

  return (
    <div className="mb-10 mt-20 flex flex-row gap-6">
      <Star
        delaySeconds={0.3}
        duration={0.55}
        percentage={correctAnswerPercentage}
        starRequirementPercentage={oneStarPercentage}
      />
      <Star
        delaySeconds={0.8}
        duration={0.55}
        percentage={correctAnswerPercentage}
        starRequirementPercentage={twoStarPercentage}
        className="mt-[-1rem]"
      />
      <Star
        delaySeconds={1.3}
        duration={0.25}
        percentage={correctAnswerPercentage}
        starRequirementPercentage={threeStarPercentage}
      />
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
          src="/static/star.svg"
          alt="star"
          width={90}
          height={90}
          className={className}
        />
      )}
      {percentage < starRequirementPercentage && (
        <Image
          src="/static/star-empty.svg"
          alt="star"
          width={90}
          height={90}
          className={className}
        />
      )}
    </Transition>
  );
};
