import { InferValueTypes } from "../../types/redux";
import * as actions from "./action";

export enum CalculatorActionTypes {
  RESET_CALCULATOR = "@calculator/RESET_CALCULATOR",
}

export enum BuildsEnum {
  HOUSE = 1,
  GARAGE = 2,
}

export enum MaterialEnum {
  BRICK = 1,
  CINDER_BLOCK = 2,
  WOODEN_BEAM = 3,
  METAL = 4,
  SANDWICH_PANEL = 5,
}

export interface CalculatorInitialState {
  readonly step: number,
  readonly buildType: BuildsEnum,
  readonly height: number,
  readonly material: MaterialEnum,
  readonly wallSize: number,
}

export type CalculatorActions = ReturnType<InferValueTypes<typeof actions>>;
