"use client";

import { useContext } from "react";
import { QuestionContext } from "~/hooks/question-context";
import { useDrillsQuery } from "~/app/api/fetch-data";
import { DrillButton } from "~/components/drill/drill-button";
import Transition from "~/components/common/transition";

export const PublicDrills = () => {
  const questionsContext = useContext(QuestionContext);

  const { data, isLoading, isError, error } = useDrillsQuery();

  if (isLoading) {
    return (
      <div className="mt-20 flex h-screen items-start">
        <div className="h-20 w-20 animate-ping rounded-full bg-primaryCard dark:bg-primaryCardDark"></div>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading JSON files: {error.message}</div>;
  }

  if (questionsContext === null) {
    return null;
  }

  return (
    <Transition>
      {data?.map((d) => <DrillButton key={d.name} drill={d} />)}
    </Transition>
  );
};

export default PublicDrills;
