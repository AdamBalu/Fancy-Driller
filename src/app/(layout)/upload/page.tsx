import React from "react";
import { type Metadata } from "next";
import { UploadPageContent } from "~/components/upload/upload-page-content";

export const metadata: Metadata = {
  title: "Upload",
};

const UploadPage = async () => {
  return <UploadPageContent />;
};

export default UploadPage;
