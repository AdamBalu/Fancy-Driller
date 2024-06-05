"use client";
import { type PropsWithChildren, createContext, useState } from "react";
import { type Answer, type QuestionExtendedInfo } from "~/types/question";

type QuestionContextProps = {
  selectedQuestions: QuestionExtendedInfo[];
  setSelectedQuestions: (q: QuestionExtendedInfo[]) => void;
  setQuestion: (q: QuestionExtendedInfo, value: Answer) => void;
  fastMode: boolean;
  setFastMode: (i: boolean) => void;
};

export const QuestionContext = createContext<QuestionContextProps | null>(null);

export const QuestionContextProvider = ({ children }: PropsWithChildren) => {
  const [questions, setQuestions] = useState<QuestionExtendedInfo[]>([]);
  const [fastMode, setFastMode] = useState<boolean>(false);

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
        fastMode,
        setFastMode,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
