import { z } from "zod";

export const CreatePageSchema = z.object({
  title: z.string().min(5, "Mínimo se ocupan 5 caracteres"),
  domain: z
    .string()
    .min(5, "Mínimo se ocupan 5 caracteres")
    .regex(/^[a-z]+$/, "Solo letras minúsculas y sin espacios"),
});
