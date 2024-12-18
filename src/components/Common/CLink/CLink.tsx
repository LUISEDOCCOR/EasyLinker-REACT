import React from "react";
import { Link } from "react-router-dom";

export interface CLinkProps {
  text: string;
  to: string;
  color: string;
}

export const CLink: React.FC<CLinkProps> = ({ text, to, color }) => {
  return (
    <Link
      className="text-md rounded-md border-2 border-black px-5 py-2 font-semibold transition-transform hover:scale-110 xl:text-lg"
      style={{ backgroundColor: color }}
      to={to}
    >
      {text}
    </Link>
  );
};
