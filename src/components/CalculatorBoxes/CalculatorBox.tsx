import React from "react";
import style from "./CalculatorBoxes.module.scss";

interface CalculatorBoxProps {
  align?: "left" | "center" | "right",
}

const CalculatorBox: React.FC<CalculatorBoxProps> = ({ children, align }) => {
  return (
    <div className={style.wrapper_template}>
      <div className={style.title}>Что будем строить?</div>
      <div className={`${style.content} ${align && style[align]}`}>
        {children}
      </div>
    </div>
  );
};

export { CalculatorBox };
