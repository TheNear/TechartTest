import React from "react";
import { Button } from "../Button/Button";
import { CalculatorBox } from "../CalculatorBoxes/CalculatorBox";
import { CalculatorButtons } from "../CalculatorBoxes/CalculatorButtons";
import { CalculatorWrapper } from "../CalculatorBoxes/CalculatorWrapper";
import { LinkButton } from "../LinkButton/LinkButton";

const CalculatorBuild: React.FC = () => {
  return (
    <CalculatorWrapper stepTitle="Шаг 1">
      <CalculatorBox align="left">
        <LinkButton>Жилой дом</LinkButton>
        <LinkButton>Гараж</LinkButton>
      </CalculatorBox>
      <CalculatorButtons>
        <Button>Отмена</Button>
        <Button>Далее</Button>
      </CalculatorButtons>
    </CalculatorWrapper>
  );
};

export { CalculatorBuild };
