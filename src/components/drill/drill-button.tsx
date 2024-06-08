import { type Drill } from "~/schema";
import { QuestionContext } from "~/hooks/question-context";
import { useContext } from "react";
import Button from "~/components/common/button";
import { useRouter } from "next/navigation";
import { type QuestionExtendedInfo } from "~/schema";

export const DrillButton = ({ drill }: { drill: Drill }) => {
  const questionsContext = useContext(QuestionContext);
  const router = useRouter();

  if (questionsContext === null) {
    return null;
  }

  const onDrillClick = () => {
    const questionsExtendedInfo: QuestionExtendedInfo[] = drill.questions.map(
      (question) => ({
        ...question,
        answer: "none",
        order: 0,
      }),
    );
    questionsContext.setInitialQuestions(questionsExtendedInfo);
    questionsContext.setSelectedQuestions(questionsExtendedInfo);
    questionsContext.setCurrentDrillName(drill.name);
    router.push(`/drills/${drill.name}`);
  };

  return (
    <Button
      onClick={onDrillClick}
      className="h-40 w-40 border-none bg-primaryCard shadow-none shadow-secondary hover:-translate-y-1 hover:shadow-xl dark:bg-primaryCardDark dark:shadow-selectedCard dark:hover:text-secondaryDark dark:hover:shadow-md"
    >
      <h2 className="my-4 text-3xl font-bold">{drill.name}</h2>
    </Button>
  );
};
