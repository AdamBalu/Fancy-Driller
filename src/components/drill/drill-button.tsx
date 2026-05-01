import { type Drill } from "~/schema";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";
import Button from "~/components/common/button";
import { useRouter } from "next/navigation";
import { type QuestionExtendedInfo } from "~/schema";
import { useContextSelector } from "use-context-selector";
import { Info } from "lucide-react";

export const DrillButton = ({ drill }: { drill: Drill }) => {
  const contextSelectors = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => ({
      setSelectedQuestions: context?.setSelectedQuestions,
      setInitialQuestions: context?.setInitialQuestions,
      setCurrentDrillName: context?.setCurrentDrillName,
      setCurrentDrillId: context?.setCurrentDrillId,
    }),
  );

  const {
    setSelectedQuestions,
    setInitialQuestions,
    setCurrentDrillName,
    setCurrentDrillId,
  } = contextSelectors;

  const router = useRouter();

  const onDrillClick = () => {
    const questionsExtendedInfo: QuestionExtendedInfo[] = drill.questions.map(
      (question, idx) => ({
        ...question,
        answer: "none",
        order: idx + 1,
      }),
    );
    if (
      setSelectedQuestions &&
      setInitialQuestions &&
      setCurrentDrillName &&
      setCurrentDrillId
    ) {
      setInitialQuestions(questionsExtendedInfo);
      setSelectedQuestions(questionsExtendedInfo);
      setCurrentDrillName(drill.name);
      setCurrentDrillId(drill.id);
    }
    router.push(`/drills/${drill.id}`);
  };

  return (
    <Button
      onClick={onDrillClick}
      className="group relative h-52 w-44 max-w-64 border-none bg-primaryCard shadow-none shadow-secondary hover:-translate-y-1 hover:shadow-xl dark:bg-primaryCardDark dark:shadow-selectedCard dark:hover:text-secondaryDark dark:hover:shadow-md sm:w-48 md:w-52"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-12 left-0 top-12 w-1 rounded-r-full bg-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-primaryDark"
      />
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-12 right-0 top-12 w-1 rounded-l-full bg-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100 dark:bg-primaryDark"
      />
      {drill.note && (
        <div
          className="group/info absolute right-2 top-2 z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <Info className="h-5 w-5 cursor-help text-secondary opacity-0 transition-opacity group-hover:opacity-70 group-hover/info:opacity-100 dark:text-secondaryDark" />
          <div className="absolute left-1/2 bottom-6 z-20 hidden w-48 -translate-x-1/2 rounded-md bg-gray-900 p-2 text-xs text-white shadow-lg group-hover/info:block dark:bg-gray-800">
            {drill.note}
          </div>
        </div>
      )}
      {drill.chips && drill.chips.length > 0 && (
        <div className="absolute left-2 top-2 z-10 flex gap-1">
          {drill.chips.map((chip, index) => (
            <span
              key={index}
              className={`rounded-full px-2 py-1 text-xs font-medium ${
                chip === "final"
                  ? "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300"
                  : chip === "midterm"
                    ? "bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300"
                    : "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300"
              }`}
            >
              {chip}
            </span>
          ))}
        </div>
      )}
      <div className="flex flex-1 flex-col items-center justify-center gap-2">
        <h2 className="text-center text-base font-bold sm:text-xl">
          {drill.name}
        </h2>
        <p className="text-[10px] font-medium uppercase tracking-[0.2em] text-secondary/50 dark:text-secondaryDark/50">
          {drill.questions.length}{" "}
          {drill.questions.length === 1 ? "question" : "questions"}
        </p>
      </div>
    </Button>
  );
};
