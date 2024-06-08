import { type QuestionExtendedInfo } from "~/schema";

export const getCorrectlyAnsweredNum = (
  selectedQuestions: QuestionExtendedInfo[],
) => selectedQuestions.filter((q) => q.answer === "correct").length;

export const getAnsweredNum = (selectedQuestions: QuestionExtendedInfo[]) =>
  selectedQuestions.filter((q) => q.answer !== "none").length;

export const getFirstUnansweredAfterIndex = (
  selectedQuestions: QuestionExtendedInfo[],
  currentIndex: number,
) =>
  selectedQuestions.find(
    (question, index) => question.answer === "none" && index > currentIndex,
  );

export const getFirstUnanswered = (selectedQuestions: QuestionExtendedInfo[]) =>
  selectedQuestions.find((question) => question.answer === "none");

export const getFirstUnansweredWithCurrentQuestionCheck = (
  selectedQuestions: QuestionExtendedInfo[],
  currentQuestion: QuestionExtendedInfo,
) =>
  selectedQuestions.find(
    (question) =>
      question.answer === "none" && question.order !== currentQuestion.order,
  );
