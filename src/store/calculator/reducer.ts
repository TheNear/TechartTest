import {
  CalculatorActions,
  CalculatorActionTypes,
  CalculatorInitialState,
} from "./types";

const initialState: CalculatorInitialState = {
  step: 1,
  buildType: null,
  height: null,
  material: null,
  wallSizeX: null,
  wallSizeY: null,
};

export const calculatorReducer = (
  state = initialState,
  action: CalculatorActions,
): CalculatorInitialState => {
  switch (action.type) {
    case CalculatorActionTypes.RESET_CALCULATOR:
      return initialState;
    case CalculatorActionTypes.SET_WALL_SIZE:
      return { ...state, wallSizeX: action.payload.xSize, wallSizeY: action.payload.ySize };
    case CalculatorActionTypes.SET_BUILD_TYPE:
      return { ...state, buildType: action.payload };
    case CalculatorActionTypes.SET_MATERIAL:
      return { ...state, material: action.payload };
    case CalculatorActionTypes.SET_HEIGHT:
      return { ...state, height: action.payload };
    default:
      return state;
  }
};
