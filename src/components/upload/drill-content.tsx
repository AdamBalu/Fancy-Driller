"use client";
import React, { useContext, useState } from "react";
import { SelectOrderButton } from "~/components/upload/select-order-button";
import { StartDrillButton } from "~/components/upload/start-drill-button";
import { QuestionContext } from "~/hooks/question-context";
import Checkbox from "~/components/common/checkbox";

export const DrillContent = ({ drillName }: { drillName: string }) => {
  const questionsContext = useContext(QuestionContext);
  const [sequential, setSequential] = useState(false);

  if (questionsContext === null) {
    return null;
  }

  return (
    <>
      {questionsContext.selectedQuestions?.length > 0 && (
        <div className="mb-8 flex flex-col items-center gap-4">
          <h2 className="my-4 text-3xl font-bold">{drillName}</h2>
          <StartDrillButton sequential={sequential} />
          <Checkbox
            id="fast-mode"
            onChange={() =>
              questionsContext.setFastMode(!questionsContext.fastMode)
            }
            checked={questionsContext.fastMode}
          >
            Fast mode
          </Checkbox>
          <SelectOrderButton isSequentialState={[sequential, setSequential]} />
          {questionsContext.selectedQuestions.map((question) => (
            <div
              key={question.question}
              className="flex w-[90dvw] flex-col items-start justify-start gap-2 rounded-lg bg-primaryCard p-4 md:w-[70dvw] lg:w-[50dvw]"
            >
              <div className="text-xl font-bold">{question.question}</div>
              <div className="border-l-2 border-correct pl-2 text-sm">
                {question.correct.map((a) => (
                  <div key={a}>{a}</div>
                ))}
              </div>
              <div className="border-l-2 border-incorrect pl-2 text-sm">
                {question.wrong.map((a) => (
                  <div key={a}>{a}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
