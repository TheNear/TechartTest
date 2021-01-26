import React from "react";
import { CalculatorBuild } from "../CalculatorSteps/CalculatorBuild";
import style from "./Calculator.module.scss";

const Calculator: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Калькулятор цены конструкций</h2>
      <CalculatorBuild />
    </div>
  );
};

export { Calculator };
