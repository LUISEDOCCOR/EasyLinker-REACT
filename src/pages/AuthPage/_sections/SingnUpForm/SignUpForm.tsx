import { Mail, KeyRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod";
import { SignUpSchema, SignUpSchemaType } from "@/zodSchemas";
import { BaseForm } from "@/components";
import { AuthFunctionType } from "@/hooks";
import React from "react";

export interface SignUpFormProps {
  auth: AuthFunctionType;
}
export const SignUpForm: React.FC<SignUpFormProps> = ({ auth }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
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
      {
        Icon: KeyRound,
        name: "passwordConfirm",
        id: "passwordConfirm",
        placeholder: "Escribe nuevamente la contraseña",
        type: "password",
        label: "Confirma la contraseña:",
        register,
        errors,
      },
    ],
    buttons: [
      {
        color: "#90EE90",
        text: "Crear cuenta",
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
