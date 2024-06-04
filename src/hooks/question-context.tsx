"use client";
import { type PropsWithChildren, createContext, useState } from "react";
import { type Answer, type QuestionExtendedInfo } from "~/types/question";

type QuestionContextProps = {
  selectedQuestions: QuestionExtendedInfo[];
  setSelectedQuestions: (q: QuestionExtendedInfo[]) => void;
  setQuestion: (q: QuestionExtendedInfo, value: Answer) => void;
  instantChecks: boolean;
  setInstantChecks: (i: boolean) => void;
  autoAdvance: boolean;
  setAutoAdvance: (a: boolean) => void;
};

export const QuestionContext = createContext<QuestionContextProps | null>(null);

export const QuestionContextProvider = ({ children }: PropsWithChildren) => {
  const [questions, setQuestions] = useState<QuestionExtendedInfo[]>([]);
  const [instantChecks, setInstantChecks] = useState<boolean>(true);
  const [autoAdvance, setAutoAdvance] = useState<boolean>(true);

  const setSelectedQuestions = (q: QuestionExtendedInfo[]) => {
    setQuestions(q);
  };

  const setQuestion = (q: QuestionExtendedInfo, value: Answer) => {
    const updatedQuestions = questions.map((item) =>
      item.order === q.order ? { ...item, answer: value } : item,
    );
    setQuestions(updatedQuestions);
  };

  return (
    <QuestionContext.Provider
      value={{
        selectedQuestions: questions,
        setSelectedQuestions,
        setQuestion,
        instantChecks,
        setInstantChecks,
        autoAdvance,
        setAutoAdvance,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
