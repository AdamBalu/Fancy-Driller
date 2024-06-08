import React from "react";

interface ProgressBarProps {
  value: number;
  max: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="h-1 w-full rounded-full bg-primaryCard dark:bg-primaryCardDark">
      <div
        className="h-1 rounded-full bg-border transition-width duration-500 ease-in-out dark:bg-primaryDark"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
