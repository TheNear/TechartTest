import React from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ onClick, children }) => {
  return (
    <button type="button" onClick={onClick} className={style.common_button}>
      {children}
    </button>
  );
};

export { Button };
