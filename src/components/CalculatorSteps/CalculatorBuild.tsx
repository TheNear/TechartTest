import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { setBuildType } from "../../store/calculator/action";
import { BuildsEnum, CalculatorActions } from "../../store/calculator/types";
import { Button } from "../Button/Button";
import { CalculatorBox } from "../CalculatorWarppers/CalculatorBox";
import { CalculatorButtons } from "../CalculatorWarppers/CalculatorButtons";
import { CalculatorWrapper } from "../CalculatorWarppers/CalculatorWrapper";
import { CancelButton } from "../CancelButton/CancelButton";
import { LinkButton } from "../LinkButton/LinkButton";

const CalculatorBuild: React.FC = () => {
  const dispatch = useDispatch<Dispatch<CalculatorActions>>();
  return (
    <CalculatorWrapper>
      <CalculatorBox align="left">
        <LinkButton onClick={() => dispatch(setBuildType(BuildsEnum.HOUSE))}>Жилой дом</LinkButton>
        <LinkButton onClick={() => dispatch(setBuildType(BuildsEnum.GARAGE))}>Гараж</LinkButton>
      </CalculatorBox>
      <CalculatorButtons>
        <CancelButton>Отмена</CancelButton>
        <Button onClick={() => dispatch(setBuildType(BuildsEnum.HOUSE))}>Далее</Button>
      </CalculatorButtons>
    </CalculatorWrapper>
  );
};

export { CalculatorBuild };
