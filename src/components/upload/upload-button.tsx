"use client";
import React, { useRef, useState } from "react";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";
import { useRouter } from "next/navigation";
import { isValidJsonQuestions } from "~/common/check-json-correctness";
import { toastError } from "../common/toast-custom";
import { type Question, type QuestionExtendedInfo } from "~/schema";
import { useContextSelector } from "use-context-selector";
import { Upload } from "lucide-react";
import { cn } from "~/lib/cn";

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
  const [isDragging, setIsDragging] = useState(false);
  const router = useRouter();

  const processFile = (file: File) => {
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
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) processFile(file);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setIsDragging(false);
    const file = event.dataTransfer.files?.[0];
    if (!file) return;
    if (!file.name.endsWith(".json")) {
      toastError("Please drop a .json file");
      return;
    }
    processFile(file);
  };

  return (
    <div
      onClick={() => fileInputRef.current?.click()}
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          fileInputRef.current?.click();
        }
      }}
      className={cn(
        "flex w-full max-w-96 cursor-pointer flex-col items-center gap-3 rounded-lg border-2 border-dashed px-8 py-10 text-center text-secondary transition duration-200 dark:text-secondaryDark",
        isDragging
          ? "border-primary bg-primary/10 dark:border-primaryDark dark:bg-primaryDark/10"
          : "border-border bg-primaryCard/30 hover:border-primary hover:bg-primary/5 dark:border-borderDark dark:bg-primaryCardDark/30 dark:hover:border-primaryDark dark:hover:bg-primaryDark/5",
      )}
    >
      <input
        type="file"
        accept=".json"
        ref={fileInputRef}
        className="hidden"
        onChange={handleFileUpload}
      />
      <Upload className="h-8 w-8 opacity-70" />
      <div className="flex flex-col gap-1">
        <p className="text-sm font-bold sm:text-base">
          Drop your JSON file here
        </p>
        <p className="text-xs text-secondary/60 dark:text-secondaryDark/60">
          or click to browse
        </p>
      </div>
    </div>
  );
};

export default UploadButton;
