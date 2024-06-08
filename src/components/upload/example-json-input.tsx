"use client";
import { CodeBlock, tomorrowNightEighties } from "react-code-blocks";
import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export const ExampleJsonInput = () => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // mounting to prevent theme mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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

  const codeTheme =
    theme === "dark" || theme === undefined
      ? {
          ...tomorrowNightEighties,
          backgroundColor: "#011220",
          textColor: "#ececec",
          stringColor: "#3887ff",
        }
      : {
          ...tomorrowNightEighties,
          backgroundColor: "#cbdff1",
          textColor: "#1d1f21",
          stringColor: "#3887ff",
        };

  return (
    <div className="max-w-96 rounded-xl text-xs sm:text-base">
      <CodeBlock
        codeBlockStyle={customStyle}
        codeContainerStyle={customStyle}
        text={code}
        language="json"
        theme={codeTheme}
        showLineNumbers={false}
      />
    </div>
  );
};
