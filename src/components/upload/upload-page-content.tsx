"use client";
import { ExampleJsonInput } from "~/components/upload/example-json-input";
import React, { useContext, useState } from "react";
import UploadButton from "~/components/upload/upload-button";
import { SelectOrderButton } from "~/components/upload/select-order-button";
import { StartDrillButton } from "~/components/upload/start-drill-button";
import Checkbox from "~/components/common/checkbox";
import { QuestionContext } from "~/hooks/question-context";

export const UploadPageContent = () => {
  const questionsContext = useContext(QuestionContext);
  const [sequential, setSequential] = useState(false);

  if (questionsContext === null) {
    return null;
  }

  return (
    <>
      {questionsContext.selectedQuestions?.length === 0 && (
        <>
          <div>Upload your JSON questions in the following format</div>
          <ExampleJsonInput />
          <UploadButton
            questions={questionsContext.selectedQuestions}
            setQuestions={questionsContext.setSelectedQuestions}
          />
        </>
      )}

      {questionsContext.selectedQuestions?.length > 0 && (
        <div className="mb-8 flex flex-col items-center gap-4">
          <StartDrillButton sequential={sequential} />
          <div className="flex gap-4">
            <Checkbox
              id="instant-checks"
              onChange={() =>
                questionsContext.setInstantChecks(
                  !questionsContext.instantChecks,
                )
              }
              checked={questionsContext.instantChecks}
            >
              Instant checks
            </Checkbox>
            <Checkbox
              id="auto-advance"
              onChange={() =>
                questionsContext.setAutoAdvance(!questionsContext.autoAdvance)
              }
              checked={questionsContext.autoAdvance}
            >
              Auto-advance
            </Checkbox>
          </div>
          <SelectOrderButton />
          {questionsContext.selectedQuestions.map((question) => (
            <div
              key={question.question}
              className="bg-secondary flex w-[90dvw] flex-col items-start justify-start gap-2 rounded-lg p-4 md:w-[70dvw] lg:w-[50dvw]"
            >
              <div className="text-xl font-bold">{question.question}</div>
              <div className="border-correct border-l-2 pl-2 text-sm">
                {question.correct.map((a) => (
                  <div key={a}>{a}</div>
                ))}
              </div>
              <div className="border-incorrect border-l-2 pl-2 text-sm">
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
