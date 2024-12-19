import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { pb } from "@/pocketbase";

export const useProtectedRoute = (x = true) => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuthStore = () => {
      if (x) {
        if (!pb.authStore.isValid) {
          return navigate("/");
        }
      } else {
        if (pb.authStore.isValid) {
          return navigate("/dashboard");
        }
      }
    };
    checkAuthStore();
  }, [x]);
};
