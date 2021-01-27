import React from "react";
import { useDispatch } from "react-redux";
import { resetCalculator } from "../../store/calculator/action";
import { Button } from "../Button/Button";

const CancelButton: React.FC = ({ children }) => {
  const dispatch = useDispatch();

  return (
    <Button onClick={() => dispatch(resetCalculator())}>
      {children}
    </Button>
  );
};

export { CancelButton };
