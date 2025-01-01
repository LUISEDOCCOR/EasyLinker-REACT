import { z } from "zod";

export const CreatePageSchema = z.object({
  title: z.string().min(3, "Mínimo se ocupan 3 caracteres"),
  route: z
    .string()
    .min(3, "Mínimo se ocupan 3 caracteres")
    .regex(/^[a-z]+$/, "Solo letras minúsculas y sin espacios"),
  description: z.string().min(5, "Mínimo se ocupan 5 caracteres"),
});

export type CreatePageSchemaType = z.infer<typeof CreatePageSchema>;

export const LinkPageSchema = z.object({
  title: z.string().min(3, "Mínimo se ocupan 3 caracteres"),
  link: z.string().min(3, "Mínimo se ocupan 3 caracteres"),
  color: z.unknown(),
});

export type LinkPageSchemaType = z.infer<typeof LinkPageSchema>;
