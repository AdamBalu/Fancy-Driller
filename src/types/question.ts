export type Question = {
  question: string;
  correct: string[];
  wrong: string[];
};

export type Answer = "correct" | "wrong" | "none";

export type QuestionExtendedInfo = Question & {
  answer: Answer;
  order: number;
};
