import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HomePage, AuthPage } from "@/pages";
import { Toaster } from "sonner";
import { DashboardPage } from "./pages";
import { AuthContextProvider } from "./contexts/AuthContext/AuthContext";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
