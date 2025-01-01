import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import { HomePage, AuthPage, DashboardPage, EditPage } from "@/pages";
import { AuthContextProvider } from "@/contexts";

function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Toaster />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
