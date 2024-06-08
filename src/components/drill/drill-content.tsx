"use client";
import React, { useContext, useState } from "react";
import { SelectOrderButton } from "~/components/upload/select-order-button";
import { StartDrillButton } from "~/components/upload/start-drill-button";
import { QuestionContext } from "~/hooks/question-context";
import Checkbox from "~/components/common/checkbox";
import { useDrillsQuery } from "~/app/api/fetch-data";
import Transition from "~/components/common/transition";
import { type Question, type QuestionExtendedInfo } from "~/schema";

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
  drillName,
  calledFromCustomDrill,
}: {
  drillName: string;
  calledFromCustomDrill: boolean;
}) => {
  const drill = useDrillsQuery();
  const questionsContext = useContext(QuestionContext);
  const [sequential, setSequential] = useState(false);

  const currentDrill = drill?.data?.find((d) => d.name === drillName);

  if (questionsContext === null) {
    return null;
  }

  const currQuestions: QuestionExtendedInfo[] = calledFromCustomDrill
    ? questionsContext.selectedQuestions
    : mapQuestionsToExtendedQuestions(currentDrill?.questions ?? []);

  return (
    <Transition>
      <div className="mb-8 flex flex-col items-center gap-2 sm:gap-4">
        <h2 className="my-2 text-3xl font-bold text-secondary transition-color duration-500 ease-in-out dark:text-secondaryDark sm:my-4">
          {currentDrill?.name}
        </h2>
        <StartDrillButton
          sequential={sequential}
          providedQuestions={currQuestions}
        />
        <div className="flex gap-4">
          <SelectOrderButton isSequentialState={[sequential, setSequential]} />
          <Checkbox
            id="fast-mode"
            onChange={() =>
              questionsContext.setFastMode(!questionsContext.fastMode)
            }
            checked={questionsContext.fastMode}
          >
            Fast mode
          </Checkbox>
        </div>

        {currQuestions.map((question, index) => (
          <div
            key={question.question + index}
            className="transition-background flex w-[90dvw] flex-col items-start justify-start gap-2 rounded-lg bg-primaryCard p-4 text-secondary duration-200 ease-in-out dark:bg-primaryCardDark dark:text-secondaryDark md:w-[70dvw] lg:w-[50dvw]"
          >
            <div className="text-sm font-bold sm:text-base">
              {question.question}
            </div>
            <div className="border-l-2 border-correct pl-2 text-sm ease-in-out md:text-base">
              {question.correct.map((a) => (
                <div key={a}>{a}</div>
              ))}
            </div>
            <div className="border-l-2 border-incorrect pl-2 text-sm ease-in-out md:text-base">
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
