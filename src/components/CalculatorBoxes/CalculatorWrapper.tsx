import React from "react";
import style from "./CalculatorBoxes.module.scss";

interface CalculatorWrapperProps {
  stepTitle: string,
}

const CalculatorWrapper: React.FC<CalculatorWrapperProps> = ({ children, stepTitle }) => {
  return (
    <div className={style.wrapper}>
      <p className={style.step}>{stepTitle}</p>
      {children}
    </div>
  );
};

export { CalculatorWrapper };
