"use client";
import Button from "~/components/common/button";

export const StartDrillButton = () => {
  return (
    <Button
      onClick={() => {
        console.log("start drill");
      }}
      className="w-full"
    >
      Start Drill
    </Button>
  );
};
