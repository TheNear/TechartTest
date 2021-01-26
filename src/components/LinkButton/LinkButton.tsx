import React from "react";
import style from "./LinkButton.module.scss";

interface LinkButtonProps {
  className?: string,
}

const LinkButton: React.FC<LinkButtonProps> = ({ children, className }) => {
  return (
    <button type="button" className={`${style.link_button} ${className}`}>{`\u2022 ${children}`}</button>
  );
};

export { LinkButton };
