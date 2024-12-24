import { BaseForm } from "@/components";
import { Italic, Plus, Link, StickyNote } from "lucide-react";
import { useForm } from "react-hook-form";
import { CreatePageSchema, CreatePageSchemaType } from "@/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod/src/zod";
import { fetchAPICreatePage } from "@/services";
import { toast } from "sonner";
import { PageType } from "@/services";
import React, { Dispatch } from "react";

export interface CreatePageProps {
  setPages: Dispatch<React.SetStateAction<PageType[] | undefined>>;
}

export const CreatePage: React.FC<CreatePageProps> = ({ setPages }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
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
        name: "route",
        placeholder: "Ingresa el dominio de tu web",
        type: "text",
        label: "Dominio de tu web",
        register,
        errors,
      },
      {
        Icon: StickyNote,
        name: "description",
        placeholder: "Ingresa una descripción",
        type: "text",
        label: "Descripción de tu web",
        register,
        errors,
      },
    ],
    buttons: [
      {
        color: "#90EE90",
        text: "Crear Página",
        children: <Plus />,
      },
    ],
  };

  const onSubmit = async (data: CreatePageSchemaType) => {
    try {
      const { json, response } = await fetchAPICreatePage(data);
      toast(json.msg);
      if (json.data && response.ok) {
        setPages((prev) => {
          return prev && [...prev, json.data];
        });
      }
    } catch {
      toast("Hubo un error, vuelve a intentarlo más tarde. ");
    } finally {
      reset();
    }
  };

  return (
    <section className="space-y-4 rounded-md bg-white p-6 lg:space-y-8">
      <h2 className="text-xl font-semibold">CREAR NUEVA PÁGINA</h2>
      <BaseForm
        form={createPageForm}
        handleSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      />
    </section>
  );
};
