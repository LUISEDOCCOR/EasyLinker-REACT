import { useState } from "react";
import { toast } from "sonner";
import { useNavigate } from "react-router-dom";
import { SignUpSchemaType, LoginSchemaType } from "@/zodSchemas";
import { fetchAPIAuth } from "@/services";
import { setCookie } from "@/utils";

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
      const { json, response } = await fetchAPIAuth(data, currentAction);
      if (response.status != 200) {
        toast(json.msg);
        return;
      }
      if (json.email && json.token) {
        setCookie({ key: "email", value: json.email });
        setCookie({ key: "token", value: json.token });
        navigate("/dashboard");
      }
    } catch {
      toast("Hubo un error, vuelve a intentarlo más tarde. ");
    }
  };

  return { auth, currentAction, setCurrentAction };
};
