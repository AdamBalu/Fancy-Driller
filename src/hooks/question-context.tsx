"use client";
import { type PropsWithChildren, createContext, useState } from "react";
import { type Answer, type QuestionExtendedInfo } from "~/schema";

type QuestionContextProps = {
  selectedQuestions: QuestionExtendedInfo[];
  initialQuestions: QuestionExtendedInfo[];
  setSelectedQuestions: (q: QuestionExtendedInfo[]) => void;
  setInitialQuestions: (q: QuestionExtendedInfo[]) => void;
  setQuestion: (q: QuestionExtendedInfo, value: Answer) => void;
  fastMode: boolean;
  setFastMode: (i: boolean) => void;
  currentDrillName: string;
  setCurrentDrillName: (name: string) => void;
};

export const QuestionContext = createContext<QuestionContextProps | null>(null);

export const QuestionContextProvider = ({ children }: PropsWithChildren) => {
  const [questions, setQuestions] = useState<QuestionExtendedInfo[]>([]);
  const [fastMode, setFastMode] = useState<boolean>(false);
  const [initialQuestions, setInitQuestions] = useState<QuestionExtendedInfo[]>(
    [],
  );
  const [currDrillName, setCurrDrillName] = useState<string>("");

  const setSelectedQuestions = (q: QuestionExtendedInfo[]) => {
    setQuestions(q);
  };

  const setInitialQuestions = (q: QuestionExtendedInfo[]) => {
    setInitQuestions(q);
  };

  const setCurrentDrillName = (name: string) => {
    setCurrDrillName(name);
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
        initialQuestions: initialQuestions,
        setInitialQuestions,
        setSelectedQuestions,
        setQuestion,
        fastMode,
        setFastMode,
        currentDrillName: currDrillName,
        setCurrentDrillName,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
