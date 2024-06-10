import { type Drill } from "~/schema";
import {
  QuestionContext,
  type QuestionContextProps,
} from "~/hooks/question-context";
import Button from "~/components/common/button";
import { useRouter } from "next/navigation";
import { type QuestionExtendedInfo } from "~/schema";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useContextSelector } from "use-context-selector";

export const DrillButton = ({ drill }: { drill: Drill }) => {
  const contextSelectors = useContextSelector(
    QuestionContext,
    (context: QuestionContextProps | null) => ({
      setSelectedQuestions: context?.setSelectedQuestions,
      setInitialQuestions: context?.setInitialQuestions,
      setCurrentDrillName: context?.setCurrentDrillName,
    }),
  );

  const { setSelectedQuestions, setInitialQuestions, setCurrentDrillName } =
    contextSelectors;

  const router = useRouter();
  const { theme } = useTheme();

  const onDrillClick = () => {
    const questionsExtendedInfo: QuestionExtendedInfo[] = drill.questions.map(
      (question) => ({
        ...question,
        answer: "none",
        order: 0,
      }),
    );
    if (setSelectedQuestions && setInitialQuestions && setCurrentDrillName) {
      setInitialQuestions(questionsExtendedInfo);
      setSelectedQuestions(questionsExtendedInfo);
      setCurrentDrillName(drill.name);
    }
    router.push(`/drills/${drill.name}`);
  };

  return (
    <Button
      onClick={onDrillClick}
      className="group h-52 max-w-64 border-none bg-primaryCard shadow-none shadow-secondary hover:-translate-y-1 hover:shadow-xl dark:bg-primaryCardDark dark:shadow-selectedCard dark:hover:text-secondaryDark dark:hover:shadow-md"
    >
      <h2 className="my-4 text-center text-base font-bold sm:text-xl">
        {drill.name}
      </h2>
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
