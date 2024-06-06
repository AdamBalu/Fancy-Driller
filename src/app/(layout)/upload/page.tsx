import { ExampleJsonInput } from "~/components/upload/example-json-input";
import UploadButton from "~/components/upload/upload-button";
import React from "react";

const Page = () => (
  <>
    <div className="text-center">
      Upload your JSON questions in the following format
    </div>
    <ExampleJsonInput />
    <UploadButton />
  </>
);

export default Page;
