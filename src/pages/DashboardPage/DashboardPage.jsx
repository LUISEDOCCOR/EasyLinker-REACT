import { DashboardLayout } from "@/layouts";
import { useProtectedRoute, useAuthContext } from "@/hooks";
import { CButton, CInput } from "@/components";
import { LogOut, Italic, Plus } from "lucide-react";

export const DashboardPage = () => {
  useProtectedRoute();
  const { Logout } = useAuthContext();

  return (
    <DashboardLayout color="#BD4DC0">
      <header className="flex items-center justify-between">
        <h1 className="text-3xl font-extrabold uppercase">EasyLinker</h1>
        <div className="w-32">
          <CButton onClick={Logout} color="#F16D6E" text="Salir">
            <LogOut width={24} />
          </CButton>
        </div>
      </header>
      <main className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <section className="space-y-8 rounded-md bg-white p-6">
          <h2 className="text-xl font-semibold">CREAR NUEVA PÁGINA</h2>
          <form className="space-y-3" action="">
            <CInput
              Icon={Italic}
              name="name"
              id="name"
              placeholder="Mi Nueva Página"
              type="text"
              label="Titulo de la Página"
              stateValue={() => {}}
              setState=""
            />
            <CButton onClick={() => {}} color="#7CC67B" text="Crear">
              <Plus width={24} />
            </CButton>
          </form>
        </section>
        <section className="space-y-8 rounded-md bg-white p-6">
          <h2 className="text-xl font-semibold">TUS PÁGINAS</h2>
          <span role="alert">No tienes páginas</span>
        </section>
      </main>
    </DashboardLayout>
  );
};
