import React from "react";

export interface DashboardLayoutProps {
  children: React.ReactNode;
  color: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  color,
}) => {
  return (
    <div
      className="min-h-screen w-full p-6 xl:px-0 xl:py-12"
      style={{ backgroundColor: color }}
    >
      <div className="mx-auto min-h-screen max-w-5xl">{children}</div>
    </div>
  );
};
