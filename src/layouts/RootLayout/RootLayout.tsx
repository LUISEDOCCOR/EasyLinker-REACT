export const RootLayout = ({ color, children }) => {
  return (
    <div
      className="flex min-h-screen w-full flex-col items-center justify-center gap-12 p-6 xl:px-0 xl:py-12"
      style={{ backgroundColor: color }}
    >
      {children}
    </div>
  );
};
