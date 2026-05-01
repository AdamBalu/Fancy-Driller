"use client";

import { useDrillsQuery } from "~/app/api/fetch-data";
import { DrillButton } from "~/components/drill/drill-button";
import Transition from "~/components/common/transition";

export const PublicDrills = () => {
  const { data, isLoading, isError, error } = useDrillsQuery();

  if (isLoading) {
    return (
      <div className="flex min-h-[655px] items-center justify-center">
        <div className="h-20 w-20 animate-ping rounded-full bg-button dark:bg-primaryCardDark"></div>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading JSON files: {error.message}</div>;
  }

  return (
    <Transition>
      <div className="mx-auto flex max-w-4xl flex-wrap items-start justify-center gap-4 px-4 text-center">
        {data?.map((d, idx) => <DrillButton key={d.id + idx} drill={d} />)}
      </div>
    </Transition>
  );
};

export default PublicDrills;
