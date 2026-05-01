import { ExampleJsonInput } from "~/components/upload/example-json-input";
import UploadButton from "~/components/upload/upload-button";
import React from "react";
import Transition from "~/components/common/transition";
import type { Metadata } from "next";
import { Info } from "lucide-react";

export const metadata: Metadata = {
  title: "Upload",
};

const Page = async () => (
  <Transition>
    <div className="mx-auto mt-10 flex max-w-screen-md flex-col items-center justify-center gap-8 px-4">
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-3xl font-bold text-secondary dark:text-secondaryDark sm:text-4xl">
          Upload Drill
        </h1>
        <p className="text-xs font-medium uppercase tracking-[0.2em] text-secondary/50 dark:text-secondaryDark/50">
          Custom JSON questions
        </p>
      </div>
      <div className="relative flex items-center justify-center gap-2 text-center text-sm text-secondary/80 dark:text-secondaryDark/80 sm:text-base">
        Provide your JSON questions in the following format
        <div className="group/info inline-block">
          <Info className="h-4 w-4 cursor-help text-secondary opacity-70 transition-opacity hover:opacity-100 dark:text-secondaryDark" />
          <div className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-3 hidden w-[90dvw] max-w-64 -translate-x-1/2 rounded-md bg-gray-900 p-2 text-xs text-white shadow-lg group-hover/info:block dark:bg-gray-800">
            Questions where any line starts with &quot; | &quot; are treated as
            tables. They use monospaced font and preserved whitespace for better
            formatting.
          </div>
        </div>
      </div>
      <ExampleJsonInput />
      <UploadButton />
    </div>
  </Transition>
);

export default Page;
