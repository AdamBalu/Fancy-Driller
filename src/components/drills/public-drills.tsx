"use client";

import { useDrillsQuery } from "~/app/api/fetch-data";
import { DrillButton } from "~/components/drill/drill-button";
import Transition from "~/components/common/transition";

export const PublicDrills = () => {
  const { data, isLoading, isError, error } = useDrillsQuery();

  if (isLoading) {
    return (
      <div className="mt-20 flex h-screen items-start">
        <div className="h-20 w-20 animate-ping rounded-full bg-button dark:bg-primaryCardDark"></div>
      </div>
    );
  }

  if (isError) {
    return <div>Error loading JSON files: {error.message}</div>;
  }

  return (
    <Transition>
      <div className="mx-4 grid grid-cols-2 items-center justify-center gap-4 text-center md:grid-cols-3 xl:grid-cols-4">
        {data?.map((d, idx) => <DrillButton key={d.id + idx} drill={d} />)}
      </div>
    </Transition>
  );
};

export default PublicDrills;
