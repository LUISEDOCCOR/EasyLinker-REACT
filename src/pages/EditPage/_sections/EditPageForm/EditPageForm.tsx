import { PageType } from "@/services";
import { BaseForm, CButton } from "@/components";
import { Italic, Save, Link, StickyNote } from "lucide-react";
import { useForm } from "react-hook-form";
import { CreatePageSchemaType, CreatePageSchema } from "@/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod/src/zod";
import React from "react";

export interface EditPageProps {
  page: PageType;
  onSubmit: (data: CreatePageSchemaType) => void;
}

export const EditPageForm: React.FC<EditPageProps> = ({ page, onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreatePageSchemaType>({
    resolver: zodResolver(CreatePageSchema),
  });

  const updatePageForm = {
    inputs: [
      {
        Icon: Italic,
        name: "title",
        placeholder: "Ingresa un titulo",
        type: "text",
        label: "Titulo",
        register,
        errors,
        defaultValue: page?.title,
      },
      {
        Icon: Link,
        name: "route",
        placeholder: "Ingresa el dominio de tu web",
        type: "text",
        label: "Dominio de tu web (no editable)",
        register,
        errors,
        defaultValue: page?.route,
        readonly: true,
      },
      {
        Icon: StickyNote,
        name: "description",
        placeholder: "Ingresa una descripción",
        type: "text",
        label: "Descripción de tu web",
        register,
        errors,
        defaultValue: page?.description,
      },
    ],
    buttons: [
      {
        color: "#90EE90",
        text: "Actualizar Página",
        children: <Save />,
      },
    ],
  };

  return (
    <section className="space-y-4 rounded-md bg-white p-6 lg:space-y-8">
      <h2 className="text-xl font-semibold">
        Editando página: <span className="underline">{page.title}</span>
      </h2>
      <BaseForm
        form={updatePageForm}
        handleSubmit={handleSubmit((data) => {
          onSubmit(data);
        })}
      />
    </section>
  );
};
