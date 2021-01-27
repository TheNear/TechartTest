import React from "react";
import { useSelector } from "react-redux";
import { getCurrentStep } from "../../store/calculator/selectors";
import { CalculatorStepsMap } from "../CalculatorSteps/CalculatorSteps";
import style from "./Calculator.module.scss";

const Calculator: React.FC = () => {
  const currentStep = useSelector(getCurrentStep);
  const CurrentStepPage = CalculatorStepsMap[currentStep];

  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Калькулятор цены конструкций</h2>
      <CurrentStepPage />
    </div>
  );
};

export { Calculator };
