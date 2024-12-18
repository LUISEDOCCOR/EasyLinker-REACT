import { DashboardLayout } from "@/layouts";
import { useProtectedRoute, useAuthContext } from "@/hooks";
import { CButton, BaseForm } from "@/components";
import { LogOut, Italic, Plus, Link } from "lucide-react";
import { useForm } from "react-hook-form";
import { CreatePageSchema } from "@/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod/src/zod";

export const DashboardPage = () => {
  useProtectedRoute();
  const { Logout } = useAuthContext();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(CreatePageSchema),
  });

  const createPageForm = {
    inputs: [
      {
        Icon: Italic,
        name: "title",
        placeholder: "Ingresa un titulo",
        type: "text",
        label: "Titulo",
        register,
        errors,
      },
      {
        Icon: Link,
        name: "domain",
        placeholder: "Ingresa el dominio de tu web",
        type: "text",
        label: "Dominio de tu web",
        register,
        errors,
      },
    ],
    buttons: [
      {
        onClick: () => {},
        color: "#90EE90",
        text: "Crear Página",
        children: <Plus />,
      },
    ],
  };

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
        <section className="space-y-4 rounded-md bg-white p-6 lg:space-y-8">
          <h2 className="text-xl font-semibold">CREAR NUEVA PÁGINA</h2>
          <BaseForm form={createPageForm} handleSubmit={handleSubmit()} />
        </section>
        <section className="space-y-4 rounded-md bg-white p-6 lg:space-y-8">
          <h2 className="text-xl font-semibold">TUS PÁGINAS</h2>
          <span role="alert">No tienes pá+ginas</span>
        </section>
      </main>
    </DashboardLayout>
  );
};
