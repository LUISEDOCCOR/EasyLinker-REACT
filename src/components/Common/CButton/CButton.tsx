import React from "react";

export interface CButtonProps {
  text: string;
  color: string;
  onClick?: () => void;
  children?: React.ReactNode;
  disabled?: boolean;
}

export const CButton: React.FC<CButtonProps> = ({
  text,
  color,
  onClick,
  children,
  disabled,
}) => {
  return (
    <button
      onClick={onClick}
      className={`text-md flex w-full items-center justify-center gap-2 rounded-md border-2 border-black px-5 py-2 font-semibold transition-transform disabled:cursor-not-allowed disabled:opacity-60 ${!disabled && "hover:scale-105"} xl:text-lg`}
      style={{ backgroundColor: color }}
      disabled={disabled}
    >
      {children}
      <span>{text}</span>
    </button>
  );
};
