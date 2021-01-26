import {
  BuildsEnum,
  CalculatorActions,
  CalculatorActionTypes,
  CalculatorInitialState,
  MaterialEnum,
} from "./types";

const initialState: CalculatorInitialState = {
  buildType: BuildsEnum.HOUSE,
  height: 0,
  material: MaterialEnum.BRICK,
  step: 1,
  wallSize: 0,
};

export const calculatorReducer = (
  state = initialState,
  action: CalculatorActions,
): CalculatorInitialState => {
  switch (action.type) {
    case CalculatorActionTypes.RESET_CALCULATOR:
      return initialState;
    default:
      return state;
  }
};
