import React from "react";
import { Button } from "../Button/Button";
import { CalculatorBox } from "../CalculatorBoxes/CalculatorBox";
import { CalculatorButtons } from "../CalculatorBoxes/CalculatorButtons";
import { CalculatorWrapper } from "../CalculatorBoxes/CalculatorWrapper";

const CalculatorBuild: React.FC = () => {
  return (
    <CalculatorWrapper stepTitle="Шаг 1">
      <CalculatorBox>
        fdgsdfg
      </CalculatorBox>
      <CalculatorButtons>
        <Button>Отмена</Button>
        <Button>Далее</Button>
      </CalculatorButtons>
    </CalculatorWrapper>
  );
};

export { CalculatorBuild };
