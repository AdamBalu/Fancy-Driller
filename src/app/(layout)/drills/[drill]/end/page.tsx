import React from "react";
import { type Metadata } from "next";
import { QuestionGrid } from "~/components/drill/question-grid";
import { Stars } from "~/components/drill/end/stars";
import { RestartDrillButton } from "~/components/drill/end/restart-drill-button";
import { RestartWrongQuestionsButton } from "~/components/drill/end/restart-wrong-questions-button";
import { QuestionRatio } from "~/components/drill/end/question-ratio";
import Transition from "~/components/common/transition";

export const metadata: Metadata = {
  title: "Drill Finished!",
};

const Page = async () => (
  <Transition>
    <div className="flex flex-col items-center justify-center gap-4 text-center">
      <Stars />
      <h1 className="text-5xl font-bold text-secondary dark:text-secondaryDark">
        Drill Finished!
      </h1>
      <QuestionRatio />
      <div className="mt-6 flex gap-20">
        <RestartDrillButton />
        <RestartWrongQuestionsButton />
      </div>
      <QuestionGrid />
    </div>
  </Transition>
);
export default Page;
