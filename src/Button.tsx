import React, { ReactNode } from "react";

interface Props {
  onClick: () => void;
  text: string;
  color?: "primary" | "secondary" | "danger";
}

const Button = ({ onClick, text, color = "primary" }: Props) => {
  return (
    <button type="button" className={`btn btn-${color}`} onClick={onClick}>
      Button
    </button>
  );
};

export default Button;
