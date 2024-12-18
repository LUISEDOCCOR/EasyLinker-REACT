import { createContext } from "react";
import { pb } from "@/pocketbase";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const isLogged = pb.authStore.isValid;
  const Logout = () => {
    pb.authStore.clear();
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isLogged, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
