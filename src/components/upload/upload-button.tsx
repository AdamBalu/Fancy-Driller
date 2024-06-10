"use client";
import React, { useRef } from "react";
import Button from "~/components/common/button";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";
import { useRouter } from "next/navigation";
import { isValidJsonQuestions } from "~/common/check-json-correctness";
import { toastError } from "../common/toast-custom";
import { type Question, type QuestionExtendedInfo } from "~/schema";
import { useContextSelector } from "use-context-selector";

export const UploadButton = () => {
  const contextSelectors = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => ({
      setSelectedQuestions: context?.setSelectedQuestions,
      setInitialQuestions: context?.setInitialQuestions,
      setCurrentDrillName: context?.setCurrentDrillName,
    }),
  );

  const { setSelectedQuestions, setInitialQuestions, setCurrentDrillName } =
    contextSelectors;

  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          try {
            const questions: Question[] = JSON.parse(
              e.target.result as string,
            ) as Question[];
            isValidJsonQuestions(questions);

            const questionsBaseState: QuestionExtendedInfo[] = questions.map(
              (question, index) => ({
                ...question,
                order: index + 1,
                answer: "none",
              }),
            );

            if (
              setSelectedQuestions &&
              setInitialQuestions &&
              setCurrentDrillName
            ) {
              setSelectedQuestions(questionsBaseState);
              setInitialQuestions(questionsBaseState);
              setCurrentDrillName("custom-drill");
            }

            router.push("/drills/custom-drill");
          } catch (error) {
            let errorMessage = "Invalid JSON";
            if (error instanceof Error) {
              errorMessage = error.message;
            }
            toastError(`Invalid JSON: ${errorMessage}`);
          } finally {
            if (fileInputRef.current) {
              fileInputRef.current.value = "";
            }
          }
        }
      };
      reader.readAsText(file);
    }
  };

  return (
    <div>
      <input
        type="file"
        accept=".json"
        ref={fileInputRef}
        style={{ display: "none" }}
        onChange={handleFileUpload}
      />
      <Button onClick={() => fileInputRef.current?.click()}>Upload JSON</Button>
    </div>
  );
};

export default UploadButton;
