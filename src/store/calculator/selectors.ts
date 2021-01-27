import { RootState } from "../../types/redux";
import { CalculatorPagesEnum } from "./types";

export const getCurrentStep = (state: RootState): CalculatorPagesEnum => {
  return state.calculator.currentStep;
};

export const getStepNumber = (state: RootState): number => state.calculator.step;
