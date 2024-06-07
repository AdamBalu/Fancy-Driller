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
        order: questionsContext.selectedQuestions.length,
      }),
    );
    questionsContext.setSelectedQuestions(questionsExtendedInfo);
    router.push(`/drills/${drill.name}`);
  };

  return (
    <Button
      onClick={onDrillClick}
      className="h-40 w-40 border-none bg-primaryCard shadow-none shadow-selectedCard hover:text-secondary hover:shadow-md hover:shadow-primary"
    >
      <h2 className="my-4 text-3xl font-bold">{drill.name}</h2>
    </Button>
  );
};
