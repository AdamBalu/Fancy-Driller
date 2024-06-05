"use client";
import { ExampleJsonInput } from "~/components/upload/example-json-input";
import React, { useContext, useState } from "react";
import UploadButton from "~/components/upload/upload-button";
import { SelectOrderButton } from "~/components/upload/select-order-button";
import { StartDrillButton } from "~/components/upload/start-drill-button";
import { QuestionContext } from "~/hooks/question-context";
import Checkbox from "~/components/common/checkbox";

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
          <div className="text-center">
            Upload your JSON questions in the following format
          </div>
          <ExampleJsonInput />
          <UploadButton setQuestions={questionsContext.setSelectedQuestions} />
        </>
      )}

      {questionsContext.selectedQuestions?.length > 0 && (
        <div className="mb-8 flex flex-col items-center gap-4">
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
              className="bg-primaryCard flex w-[90dvw] flex-col items-start justify-start gap-2 rounded-lg p-4 md:w-[70dvw] lg:w-[50dvw]"
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
