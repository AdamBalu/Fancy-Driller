import { type Question } from "~/types/question";

const validateAnswers = (answers: unknown[], propertyName: string) => {
  if (!Array.isArray(answers)) {
    throw new Error(`invalid ${propertyName} property`);
  }
  answers.forEach((answer) => {
    if (typeof answer !== "string") {
      throw new Error(`invalid ${propertyName} answer`);
    }
  });
};

export const isValidJsonQuestions = (questions: Question[]) => {
  questions.forEach((question) => {
    if (!("correct" in question)) {
      throw new Error('missing "correct" property');
    }
    validateAnswers(question.correct, "correct");

    if (!("wrong" in question)) {
      throw new Error('missing "wrong" property');
    }
    validateAnswers(question.wrong, "wrong");

    if (!("question" in question)) {
      throw new Error('missing "question" property');
    }
    if (typeof question.question !== "string") {
      throw new Error("invalid question");
    }
  });
};
