"use client";
import { type Question, type QuestionExtendedInfo } from "~/types/question";
import React, { useRef } from "react";
import Button from "~/components/common/button";

type UploadButtonProps = {
  questions: QuestionExtendedInfo[];
  setQuestions: (questions: QuestionExtendedInfo[]) => void;
};

export const UploadButton = ({
  questions,
  setQuestions,
}: UploadButtonProps) => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e: ProgressEvent<FileReader>) => {
        if (e.target?.result) {
          try {
            // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
            const questions: Question[] = JSON.parse(e.target.result as string);
            console.log("JSON parsed successfully:", questions);

            setQuestions(
              questions.map((question, index) => {
                return {
                  ...question,
                  order: index + 1,
                  answer: "none",
                };
              }),
            );
          } catch (error) {
            console.error("Invalid JSON file");
            // Handle invalid JSON case
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
