import { useState } from "react";
import { toast } from "sonner";
import { pb } from "@/pocketbase";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [currentAction, setCurrentAction] = useState("login");
  const navigate = useNavigate();

  const auth = async (data) => {
    try {
      if (currentAction == "signup") {
        await pb.collection("users").create({
          password: data.password,
          passwordConfirm: data.passwordConfirm,
          email: data.email,
        });
      }
      await pb.collection("users").authWithPassword(data.email, data.password);
      navigate("/dashboard");
    } catch {
      toast("Error con tus datos ingresa unos nuevos");
    } finally {
    }
  };

  return { auth, currentAction, setCurrentAction };
};
