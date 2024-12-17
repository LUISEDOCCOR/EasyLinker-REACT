import { z } from "zod";

export const LoginZodSchema = z.object({
  email: z.string().email("El correo no es válido"),
  password: z.string().min(8, "La contraseña ocupa como mínimo 8 caracteres"),
});

export const SignUpZodSchema = z
  .object({
    email: z.string().email("El correo no es válido"),
    password: z.string().min(8, "La contraseña ocupa como mínimo 8 caracteres"),
    passwordConfirm: z
      .string()
      .min(8, "La contraseña ocupa como mínimo 8 caracteres"),
  })
  .refine((data) => data.password === data.passwordConfirm, {
    path: ["passwordConfirm"],
    message: "Las contraseñas deben coincidir",
  });
