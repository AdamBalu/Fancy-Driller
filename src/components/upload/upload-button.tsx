"use client";
import { type Question } from "~/types/question";
import React, { useContext, useRef } from "react";
import Button from "~/components/common/button";
import { QuestionContext } from "~/hooks/question-context";
import { useRouter } from "next/navigation";
import { isValidJsonQuestions } from "~/common/check-json-correctness";
import { toastError } from "../common/toast-custom";

export const UploadButton = () => {
  const questionsContext = useContext(QuestionContext);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  if (questionsContext === null) {
    return null;
  }

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

            questionsContext.setSelectedQuestions(
              questions.map((question, index) => ({
                ...question,
                order: index + 1,
                answer: "none",
              })),
            );
            router.push("/drill");
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
