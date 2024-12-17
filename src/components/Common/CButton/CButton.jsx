export const CButton = ({ text, color, onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className="text-md flex w-full items-center justify-center gap-2 rounded-md border-2 border-black px-5 py-2 font-semibold transition-transform hover:scale-110 xl:text-lg"
      style={{ backgroundColor: color }}
    >
      {children}
      {text}
    </button>
  );
};
