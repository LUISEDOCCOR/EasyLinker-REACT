import { Mail, KeyRound } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod/src/zod";
import { LoginSchema } from "@/zodSchemas";
import { BaseForm } from "@/components";

export const LoginForm = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
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
        onClick: () => {},
        color: "#90EE90",
        text: "Iniciar sesión",
      },
    ],
  };

  return <BaseForm handleSubmit={handleSubmit(onSubmit)} form={loginForm} />;
};
