import React from "react";
import style from "./Calculator.module.scss";

const Calculator: React.FC = () => {
  return (
    <div className={style.wrapper}>
      <h2 className={style.title}>Калькулятор цены конструкций</h2>
      <p className={style.step_count}>Шаг 1</p>
    </div>
  );
};

export { Calculator };
