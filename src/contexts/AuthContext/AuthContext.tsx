import React, { createContext } from "react";
import { pb } from "@/pocketbase";
import { useNavigate } from "react-router-dom";

interface AuthContextValue {
  isLogged: boolean;
  Logout: () => void;
}

interface AuthContextProviderProps {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextValue>({
  isLogged: false,
  Logout: () => {},
});

export const AuthContextProvider: React.FC<AuthContextProviderProps> = ({
  children,
}) => {
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
