import { Link } from "react-router-dom";

export const CLink = ({ text, to, color }) => {
  return (
    <Link
      className="text-md rounded-md border-2 border-black px-5 py-2 font-semibold transition-transform hover:scale-110 xl:text-lg"
      style={{ backgroundColor: color }}
      to={to}
      viewTransition
    >
      {text}
    </Link>
  );
};
