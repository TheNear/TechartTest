import { CalculatorPagesEnum } from "../../store/calculator/types";
import { CalculatorBuild } from "./CalculatorBuild";
import { CalculatorHeight } from "./CalculatorHeight";
import { CalculatorMaterial } from "./CalculatorMaterial";
import { CalculatorResult } from "./CalculatorResult";
import { CalculatorSize } from "./CalculatorSize";

export type StepsMapType = {
  [key in keyof typeof CalculatorPagesEnum]: React.FC | React.ComponentClass
};

export const CalculatorStepsMap: StepsMapType = {
  BUILD: CalculatorBuild,
  HEIGHT: CalculatorHeight,
  MATERIAL: CalculatorMaterial,
  SIZE: CalculatorSize,
  RESULT: CalculatorResult,
};
