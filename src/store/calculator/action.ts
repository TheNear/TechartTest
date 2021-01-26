import { CalculatorActionTypes } from "./types";

export const resetCalculator = () => ({
  type: CalculatorActionTypes.RESET_CALCULATOR,
} as const);
