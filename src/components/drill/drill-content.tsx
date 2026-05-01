"use client";
import React, { useState, useMemo } from "react";
import { SelectOrderButton } from "~/components/upload/select-order-button";
import { StartDrillButton } from "~/components/upload/start-drill-button";
import Checkbox from "~/components/common/checkbox";
import { useDrillsQuery } from "~/app/api/fetch-data";
import Transition from "~/components/common/transition";
import AccentCard from "~/components/common/accent-card";
import { type Question, type QuestionExtendedInfo } from "~/schema";
import { useContextSelector } from "use-context-selector";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";

const mapQuestionsToExtendedQuestions = (
  questions: Question[],
): QuestionExtendedInfo[] => {
  return questions.map((q, idx) => ({
    ...q,
    order: idx + 1,
    answer: "none",
  }));
};

export const DrillContent = ({
  drillId,
  calledFromCustomDrill,
}: {
  drillId: string;
  calledFromCustomDrill: boolean;
}) => {
  const drill = useDrillsQuery();
  const [sequential, setSequential] = useState(false);

  const questionsContext = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => ({
      selectedQuestions: context?.selectedQuestions,
      setSelectedQuestions: context?.setSelectedQuestions,
      setFastMode: context?.setFastMode,
      fastMode: context?.fastMode,
      showOrdering: context?.showOrdering,
      setShowOrdering: context?.setShowOrdering,
    }),
  );

  const currentDrill = drill?.data?.find((d) => d.id === drillId);

  const {
    selectedQuestions,
    setSelectedQuestions,
    setFastMode,
    fastMode,
    showOrdering,
    setShowOrdering,
  } = questionsContext;

  const currQuestions: QuestionExtendedInfo[] = useMemo(
    () =>
      calledFromCustomDrill
        ? selectedQuestions ?? []
        : mapQuestionsToExtendedQuestions(currentDrill?.questions ?? []),
    [calledFromCustomDrill, currentDrill?.questions, selectedQuestions],
  );

  if (!questionsContext) return;

  if (
    !selectedQuestions ||
    !setSelectedQuestions ||
    !setFastMode ||
    !setShowOrdering
  ) {
    return;
  }

  return (
    <Transition>
      <div className="mb-8 mt-6 flex flex-col items-center gap-4 sm:mt-10 sm:gap-6">
        <AccentCard className="w-[90dvw] max-w-screen-md md:w-[70dvw] lg:w-[50dvw]">
          <div className="flex flex-col items-center gap-5 px-6 py-6 sm:px-10 sm:py-8">
            <div className="flex flex-col items-center gap-1">
              <h2 className="text-center text-3xl font-bold text-secondary transition-color duration-500 ease-in-out dark:text-secondaryDark">
                {currentDrill?.name}
              </h2>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary/50 dark:text-secondaryDark/50">
                {currQuestions.length}{" "}
                {currQuestions.length === 1 ? "question" : "questions"}
              </p>
            </div>
            <StartDrillButton
              sequential={sequential}
              providedQuestions={currQuestions}
            />
            <div className="flex flex-wrap justify-center gap-3">
              <SelectOrderButton
                isSequentialState={[sequential, setSequential]}
              />
              <Checkbox
                id="fast-mode"
                onChange={() => setFastMode(!fastMode)}
                checked={fastMode ?? false}
              >
                Fast mode
              </Checkbox>
              <Checkbox
                id="show-ordering"
                onChange={() => setShowOrdering(!showOrdering)}
                checked={showOrdering ?? true}
              >
                Show numbers
              </Checkbox>
            </div>
          </div>
        </AccentCard>

        {currQuestions.map((question, index) => (
          <div
            key={question.question + index}
            className="transition-background relative flex w-[90dvw] flex-col items-start justify-start gap-2 overflow-hidden rounded-lg bg-primaryCard p-4 text-secondary duration-200 ease-in-out dark:bg-primaryCardDark dark:text-secondaryDark md:w-[70dvw] lg:w-[50dvw]"
          >
            {showOrdering && (
              <div
                aria-hidden
                className="pointer-events-none absolute right-8 top-1/2 -translate-y-1/2 select-none bg-gradient-to-r from-secondary/[0.08] from-50% to-secondary/[0.02] to-85% bg-clip-text text-6xl font-bold leading-none text-transparent dark:from-secondaryDark/[0.08] dark:to-secondaryDark/[0.02] sm:text-7xl md:text-8xl"
              >
                {index + 1}
              </div>
            )}
            <div className="whitespace-pre-wrap text-sm font-bold sm:text-base">
              {question.question}
            </div>
            <div className="whitespace-pre-wrap border-l-2 border-correct pl-2 text-sm ease-in-out md:text-base">
              {question.correct.map((a) => (
                <div key={a}>{a}</div>
              ))}
            </div>
            <div className="whitespace-pre-wrap border-l-2 border-incorrect pl-2 text-sm ease-in-out md:text-base">
              {question.wrong.map((a) => (
                <div key={a}>{a}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Transition>
  );
};
