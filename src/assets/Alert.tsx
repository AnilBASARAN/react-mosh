import { ReactNode, useState } from "react";

interface Props {
  children: string;
  clas: string;
  onClick?: () => void;
}

const Alert = ({ clas, children, onClick }: Props) => {
  return (
    <div className={clas} role="alert">
      {children}
      <button
        onClick={onClick}
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
      ></button>
    </div>
  );
};

export default Alert;
