import React from "react";
import style from "./CalculatorBoxes.module.scss";

const CalculatorBox: React.FC = ({ children }) => {
  return (
    <div className={style.wrapper_template}>
      <div className={style.title}>Что будем строить?</div>
      <div className={style.content}>
        {children}
      </div>
    </div>
  );
};

export { CalculatorBox };
