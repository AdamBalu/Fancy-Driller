import z from "zod";

export const questionSchema = z.object({
  question: z.string(),
  correct: z.string().array(),
  wrong: z.string().array(),
});

export type Question = z.infer<typeof questionSchema>;

export const drillSchema = z.object({
  id: z.string(),
  name: z.string(),
  note: z.string().optional(),
  chips: z.array(z.string()),
  questions: z.array(questionSchema),
});

export type Drill = z.infer<typeof drillSchema>;

export type Answer = "correct" | "wrong" | "none";

export type QuestionExtendedInfo = Question & {
  answer: Answer;
  order: number;
};
