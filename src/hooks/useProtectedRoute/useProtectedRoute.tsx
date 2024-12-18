import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { pb } from "@/pocketbase";

export const useProtectedRoute = (x = true) => {
  const navigete = useNavigate();

  useEffect(() => {
    if (x) {
      if (!pb.authStore.isValid) {
        return navigete("/");
      }
    } else {
      if (pb.authStore.isValid) {
        return navigete("/");
      }
    }
  }, []);
};
