import { getCookie, removeCookie } from "@/utils";
import React, { createContext } from "react";
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
  const isLogged = getCookie("email") && getCookie("token"); //pb.authStore.isValid;
  const Logout = () => {
    removeCookie("token");
    removeCookie("email");
    navigate("/");
  };

  return (
    <AuthContext.Provider value={{ isLogged, Logout }}>
      {children}
    </AuthContext.Provider>
  );
};
