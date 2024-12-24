import React from "react";
import { CButton } from "@/components";
import { LogOut } from "lucide-react";
import { useAuthContext } from "@/hooks";

export interface DashboardLayoutProps {
  children: React.ReactNode;
  color: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  color,
}) => {
  const { Logout, email } = useAuthContext();
  return (
    <div
      className="min-h-screen w-full p-6 xl:px-0 xl:py-12"
      style={{ backgroundColor: color }}
    >
      <div className="mx-auto min-h-screen max-w-5xl">
        <header className="mb-12 flex items-center justify-between">
          <div className="space-y-4">
            <h1 className="text-3xl font-extrabold uppercase">EasyLinker</h1>
            <span className="text-md">📧 {email}</span>
          </div>
          <div className="hidden w-28 md:block xl:w-32">
            <CButton onClick={Logout} color="#F16D6E" text="Salir">
              <LogOut width={24} />
            </CButton>
          </div>
        </header>
        {children}
      </div>
    </div>
  );
};
