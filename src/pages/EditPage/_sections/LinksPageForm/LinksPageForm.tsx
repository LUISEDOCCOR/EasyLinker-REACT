import { Text, Link as LinkIcon, Plus } from "lucide-react";
import { CInput, CButton } from "@/components";
import { useForm } from "react-hook-form";
import { LinkPageSchemaType, LinkPageSchema } from "@/zodSchemas";
import { zodResolver } from "@hookform/resolvers/zod/src/zod";
import { LinkType, createLink } from "@/services";
import React from "react";

export interface LinksPageFormProps {
  links: LinkType[];
  setLinks: React.Dispatch<React.SetStateAction<LinkType[]>>;
}

export const LinksPageForm: React.FC<LinksPageFormProps> = ({
  links,
  setLinks,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LinkPageSchemaType>({
    resolver: zodResolver(LinkPageSchema),
  });

  const inputs = [
    {
      Icon: Text,
      name: "title",
      placeholder: "Ingresa un titulo",
      type: "text",
      label: "Titulo",
      register,
      errors,
    },
    {
      Icon: LinkIcon,
      name: "link",
      placeholder: "Ingresa el link",
      type: "text",
      label: "Link",
      register,
      errors,
    },
  ];

  const onSubmit = (data: LinkPageSchemaType) => {
    const link = createLink(
      data as { title: string; link: string; color: string },
    );
    setLinks((prev) => [...prev, link]);
    reset();
  };

  return (
    <section className="space-y-4 rounded-md bg-white p-6 lg:space-y-8">
      <h2 className="text-xl font-semibold">Links</h2>
      <article>
        <form
          onSubmit={handleSubmit((data) => {
            onSubmit(data);
          })}
          className="grid grid-cols-5 gap-2"
        >
          {inputs.map((props, index) => (
            <div className="col-span-2" key={index}>
              <CInput {...props} />
            </div>
          ))}
          <label
            htmlFor="color"
            className="flex w-full max-w-2xl flex-col gap-2"
          >
            <span className="text-lg font-bold">Color</span>
            <input
              id="color"
              className="h-10 w-full rounded-md border-2 border-black bg-transparent outline-none"
              type="color"
              name="color"
            />
          </label>
          <div className="col-span-5">
            <CButton text="Agregar" color="#FFFF00">
              <Plus />
            </CButton>
          </div>
        </form>
      </article>
      <article>
        {links.map((link) => (
          <div key={link.id}>{link.title}</div>
        ))}
      </article>
    </section>
  );
};
