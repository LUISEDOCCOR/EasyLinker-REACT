import { BaseForm } from "@/components";
import { Italic, Plus, Link } from "lucide-react";
import { useForm } from "react-hook-form";
import { CreatePageSchema, CreatePageSchemaType } from "@/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod/src/zod";

export const CreatePage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePageSchemaType>({
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
    <section className="space-y-4 rounded-md bg-white p-6 lg:space-y-8">
      <h2 className="text-xl font-semibold">CREAR NUEVA PÁGINA</h2>
      <BaseForm form={createPageForm} handleSubmit={handleSubmit(() => {})} />
    </section>
  );
};
