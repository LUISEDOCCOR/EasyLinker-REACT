import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { getCookie } from "@/utils";

export const useProtectedRoute = (x = true) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStore = () => {
      if (x) {
        if (!getCookie("email") || !getCookie("token")) {
          return navigate("/");
        }
      } else {
        if (getCookie("email") && getCookie("token")) {
          return navigate("/dashboard");
        }
      }
    };
    checkAuthStore();
  }, [x]);
};
