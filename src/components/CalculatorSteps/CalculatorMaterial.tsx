import React, { Dispatch } from "react";
import { useDispatch } from "react-redux";
import { setMaterial } from "../../store/calculator/action";
import { CalculatorActions, MaterialEnum } from "../../store/calculator/types";
import { Button } from "../Button/Button";
import { CalculatorBox } from "../CalculatorWarppers/CalculatorBox";
import { CalculatorButtons } from "../CalculatorWarppers/CalculatorButtons";
import { CalculatorWrapper } from "../CalculatorWarppers/CalculatorWrapper";
import { CancelButton } from "../CancelButton/CancelButton";
import { LinkButton } from "../LinkButton/LinkButton";

const CalculatorMaterial: React.FC = () => {
  const dispatch = useDispatch<Dispatch<CalculatorActions>>();

  return (
    <CalculatorWrapper>
      <CalculatorBox align="left">
        <LinkButton onClick={() => dispatch(setMaterial(MaterialEnum.BRICK))}>Кирпич</LinkButton>
        <LinkButton onClick={() => dispatch(setMaterial())}>Шлакоблок</LinkButton>
        <LinkButton onClick={() => dispatch()}>
          Деревянный брус
        </LinkButton>
      </CalculatorBox>
      <CalculatorButtons>
        <CancelButton>Отмена</CancelButton>
        <Button onClick={() => dispatch(setBuildType(BuildsEnum.HOUSE))}>Далее</Button>
      </CalculatorButtons>
    </CalculatorWrapper>
  );
};

export { CalculatorMaterial };
