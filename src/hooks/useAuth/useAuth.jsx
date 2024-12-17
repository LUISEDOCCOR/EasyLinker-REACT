import { useState } from "react";
import { toast } from "sonner";
import { pb } from "@/pocketbase";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();

  const auth = async (type) => {
    if (email.trim().length < 5 || password.trim().length < 5) {
      toast("El correo ocupa 5 campos como mínimo y la contraseña 8");
      return;
    }
    try {
      setLoading(true);
      if (type == "signup") {
        await pb.collection("users").create({
          password: password,
          passwordConfirm: password,
          email: email,
        });
      }
      await pb.collection("users").authWithPassword(email, password);
      navigate("/dashboard");
    } catch {
      toast("Error con tus datos ingresa unos nuevos");
    } finally {
      setLoading(false);
    }
  };

  return { isLoading, setEmail, setPassword, email, password, auth };
};
