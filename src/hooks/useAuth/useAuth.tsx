import { useState } from "react";
import { toast } from "sonner";
import { pb } from "@/pocketbase";
import { useNavigate } from "react-router-dom";
import { SignUpSchemaType, LoginSchemaType } from "@/zodSchemas";

type AuthActions = {
  login: LoginSchemaType;
  signup: SignUpSchemaType;
};

export type AuthFunctionType = (
  data: AuthActions[keyof AuthActions],
) => Promise<void>;

export const useAuth = () => {
  const [currentAction, setCurrentAction] =
    useState<keyof AuthActions>("login");
  const navigate = useNavigate();

  const auth = async (data: AuthActions[typeof currentAction]) => {
    try {
      if (currentAction == "signup") {
        const signupData = data as SignUpSchemaType;
        await pb.collection("users").create({
          password: signupData.password,
          passwordConfirm: signupData.passwordConfirm,
          email: signupData.email,
        });
      }
      await pb.collection("users").authWithPassword(data.email, data.password);
      navigate("/dashboard");
    } catch {
      toast("Error con tus datos ingresa unos nuevos");
    }
  };

  return { auth, currentAction, setCurrentAction };
};
