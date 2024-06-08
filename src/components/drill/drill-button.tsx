import { type Drill } from "~/schema";
import { QuestionContext } from "~/hooks/question-context";
import { useContext } from "react";
import Button from "~/components/common/button";
import { useRouter } from "next/navigation";
import { type QuestionExtendedInfo } from "~/schema";
import { useTheme } from "next-themes";
import Image from "next/image";

export const DrillButton = ({ drill }: { drill: Drill }) => {
  const questionsContext = useContext(QuestionContext);
  const router = useRouter();
  const { theme } = useTheme();

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
      className="group h-40 w-40 border-none bg-primaryCard shadow-none shadow-secondary hover:-translate-y-1 hover:shadow-xl dark:bg-primaryCardDark dark:shadow-selectedCard dark:hover:text-secondaryDark dark:hover:shadow-md"
    >
      <h2 className="my-4 text-3xl font-bold">{drill.name}</h2>
      {theme === "light" && (
        <Image
          src="/static/enter.svg"
          alt="drill"
          width={30}
          height={30}
          className="invisible group-hover:visible"
        />
      )}
      {theme !== "light" && (
        <Image
          src="/static/enter-dark.svg"
          alt="drill"
          width={30}
          height={30}
          className="invisible group-hover:visible"
        />
      )}
    </Button>
  );
};
