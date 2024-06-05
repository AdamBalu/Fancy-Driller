"use client";
import { CodeBlock, tomorrowNightEighties } from "react-code-blocks";
import React from "react";

export const ExampleJsonInput = () => {
  const code = `[
    {
        question: "What is A?",
        correct: ["A1", "A2"],
        wrong: ["X1", "X2", "X3"]
    },
    {
        question: "How does B work?",
        correct: ["B1", "B2", "B3", "B4"],
        wrong: []
    }
];`;

  const customStyle = {
    paddingLeft: "40px",
    paddingTop: "20px",
    paddingBottom: "20px",
    paddingRight: "40px",
  };

  const theme = {
    ...tomorrowNightEighties,
    backgroundColor: "#011627",
    textColor: "#ececec",
    stringColor: "#124fbd",
  };

  return (
    <div className="max-w-96 rounded-xl text-xs sm:text-base">
      <CodeBlock
        codeBlockStyle={customStyle}
        codeContainerStyle={customStyle}
        text={code}
        language="json"
        theme={theme}
        showLineNumbers={false}
      />
    </div>
  );
};
