import Transition from "~/components/common/transition";
import { QuestionGrid } from "~/components/drill/question-grid";
import { QuestionPage } from "~/components/drill/question-page";

type QuestionProps = {
  params: { id: string };
};

const Page = async ({ params }: QuestionProps) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <Transition>
        <div className="flex min-h-dvh items-center justify-center">
          <QuestionPage id={params.id} />
        </div>
      </Transition>
      <QuestionGrid />
    </div>
  );
};
export default Page;
