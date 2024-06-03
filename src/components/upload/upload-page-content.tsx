"use client";
import { ExampleJsonInput } from "~/components/upload/example-json-input";
import React from "react";
import UploadButton from "~/components/upload/upload-button";
import { type Question } from "~/types/question";
import { SelectOrderButton } from "~/components/upload/select-order-button";
import { StartDrillButton } from "~/components/upload/start-drill-button";

export const UploadPageContent = () => {
  const [questions, setQuestions] = React.useState<Question[]>([]);

  return (
    <>
      {questions.length === 0 && (
        <>
          <div>Upload your JSON questions in the following format</div>
          <ExampleJsonInput />
          <UploadButton questions={questions} setQuestions={setQuestions} />
        </>
      )}

      {questions.length > 0 && (
        <div className="mb-8 flex flex-col items-center gap-4">
          <StartDrillButton />
          <SelectOrderButton />
          {questions.map((question, index) => (
            <div
              key={index}
              className="flex w-[90dvw] flex-col items-start justify-start gap-2 rounded-lg bg-[#161017] p-4 md:w-[70dvw] lg:w-[50dvw]"
            >
              <div className="text-xl font-bold">{question.question}</div>
              <div className="border-l-2 border-green-500 pl-2 text-sm">
                {question.correct.map((q) => (
                  <div key={q}>{q}</div>
                ))}
              </div>
              <div className="border-l-2 border-red-500 pl-2 text-sm">
                {question.wrong.map((q) => (
                  <div key={q}>{q}</div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
