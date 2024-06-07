import { ExampleJsonInput } from "~/components/upload/example-json-input";
import UploadButton from "~/components/upload/upload-button";
import React from "react";
import Transition from "~/components/common/transition";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Upload",
};

const Page = async () => (
  <Transition>
    <div className="mt-10 flex flex-col items-center justify-center gap-8">
      <div className="text-center">
        Upload your JSON questions in the following format
      </div>
      <ExampleJsonInput />
      <UploadButton />
    </div>
  </Transition>
);

export default Page;
