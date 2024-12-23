import { DashboardLayout } from "@/layouts";
import { useProtectedRoute, useAuthContext } from "@/hooks";
import { CButton } from "@/components";
import { LogOut } from "lucide-react";
import { CreatePage } from "./_sections";

export const DashboardPage = () => {
  useProtectedRoute();
  const { Logout } = useAuthContext();

  return (
    <DashboardLayout color="#BD4DC0">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold uppercase">EasyLinker</h1>
        <div className="w-28 xl:w-32">
          <CButton onClick={Logout} color="#F16D6E" text="Salir">
            <LogOut width={24} />
          </CButton>
        </div>
      </header>
      <main className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <CreatePage />
        <section className="space-y-4 rounded-md bg-white p-6 lg:space-y-8">
          <h2 className="text-xl font-semibold">TUS PÁGINAS</h2>
          <span role="alert">No tienes pá+ginas</span>
        </section>
      </main>
    </DashboardLayout>
  );
};
