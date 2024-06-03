import React from 'react';
import { type Metadata } from 'next';
import {ExampleJsonInput} from "~/components/upload/example-json-input";
import {UploadButton} from "~/components/upload/upload-button";

export const metadata: Metadata = {
    title: 'Upload'
};

const UploadPage = async () => {
    return <>
        <div>Upload your JSON questions in the following format</div>
        <ExampleJsonInput />
        <UploadButton />
    </>;
};
export default UploadPage;
