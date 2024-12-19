import { Mail, KeyRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod";
import { LoginSchema, LoginSchemaType } from "@/zodSchemas";
import { BaseForm } from "@/components";
import { AuthFunctionType } from "@/hooks";
import React from "react";

export interface LoginFormProps {
  auth: AuthFunctionType;
}

export const LoginForm: React.FC<LoginFormProps> = ({ auth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginSchemaType>({
    resolver: zodResolver(LoginSchema),
  });

  const loginForm = {
    inputs: [
      {
        Icon: Mail,
        name: "email",
        placeholder: "Tu correo:",
        type: "email",
        label: "Correo",
        register,
        errors,
      },
      {
        Icon: KeyRound,
        name: "password",
        placeholder: "Crea una contraseña:",
        type: "password",
        label: "Contraseña",
        register,
        errors,
      },
    ],
    buttons: [
      {
        color: "#90EE90",
        text: "Iniciar sesión",
      },
    ],
  };

  return (
    <BaseForm
      handleSubmit={handleSubmit((data) => {
        auth(data);
      })}
      form={loginForm}
    />
  );
};
