"use client";
import { type PropsWithChildren, useState } from "react";
import { type Answer, type QuestionExtendedInfo } from "~/schema";
import { createContext } from "use-context-selector";

export type QuestionContextProps = {
  selectedQuestions: QuestionExtendedInfo[];
  initialQuestions: QuestionExtendedInfo[];
  setSelectedQuestions: (q: QuestionExtendedInfo[]) => void;
  setInitialQuestions: (q: QuestionExtendedInfo[]) => void;
  setQuestion: (q: QuestionExtendedInfo, value: Answer) => void;
  fastMode: boolean;
  setFastMode: (i: boolean) => void;
  currentDrillName: string;
  setCurrentDrillName: (name: string) => void;
  currentDrillId: string;
  setCurrentDrillId: (id: string) => void;
};

export const QuestionContext = createContext<QuestionContextProps | null>(null);

export const QuestionContextProvider = ({ children }: PropsWithChildren) => {
  const [questions, setQuestions] = useState<QuestionExtendedInfo[]>([]);
  const [fastMode, setFastMode] = useState<boolean>(false);
  const [initialQuestions, setInitQuestions] = useState<QuestionExtendedInfo[]>(
    [],
  );
  const [currDrillName, setCurrDrillName] = useState<string>("");
  const [currDrillId, setCurrDrillId] = useState<string>("");

  const setSelectedQuestions = (q: QuestionExtendedInfo[]) => {
    setQuestions(q);
  };

  const setInitialQuestions = (q: QuestionExtendedInfo[]) => {
    setInitQuestions(q);
  };

  const setCurrentDrillName = (name: string) => {
    setCurrDrillName(name);
  };

  const setCurrentDrillId = (id: string) => {
    setCurrDrillId(id);
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
        currentDrillId: currDrillId,
        setCurrentDrillId,
      }}
    >
      {children}
    </QuestionContext.Provider>
  );
};
