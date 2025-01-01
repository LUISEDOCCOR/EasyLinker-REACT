import React from "react";
import { CButton } from "@/components";
import { LogOut, Home } from "lucide-react";
import { useAuthContext, useProtectedRoute } from "@/hooks";
import { useMatch, useNavigate } from "react-router-dom";

export interface DashboardLayoutProps {
  children: React.ReactNode;
  color: string;
}

export const DashboardLayout: React.FC<DashboardLayoutProps> = ({
  children,
  color,
}) => {
  useProtectedRoute();
  const { Logout, email } = useAuthContext();
  const navigate = useNavigate();
  const isHome = useMatch("dashboard");

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
          <div className="hidden items-center gap-2 md:flex">
            {!isHome && (
              <CButton
                onClick={() => navigate("/dashboard")}
                color="#69D2E7"
                text="Home"
              >
                <Home width={24} />
              </CButton>
            )}
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
