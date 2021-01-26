import { BuildsEnum, CalculatorActionTypes, MaterialEnum } from "./types";

export const resetCalculator = () => ({
  type: CalculatorActionTypes.RESET_CALCULATOR,
} as const);

export interface SetWallSizeProps {
  xSize: string,
  ySize: string,
}

export const setWallSize = (sizes: SetWallSizeProps) => ({
  type: CalculatorActionTypes.SET_WALL_SIZE,
  payload: sizes,
} as const);

export const setBuildType = (buildType: BuildsEnum) => ({
  type: CalculatorActionTypes.SET_BUILD_TYPE,
  payload: buildType,
} as const);

export const setMaterial = (materialType: MaterialEnum) => ({
  type: CalculatorActionTypes.SET_MATERIAL,
  payload: materialType,
} as const);

export const setHeight = (height: string) => ({
  type: CalculatorActionTypes.SET_HEIGHT,
  payload: height,
} as const);
