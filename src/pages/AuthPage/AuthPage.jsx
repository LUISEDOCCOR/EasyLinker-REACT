import { RootLayout } from "@/layouts";
import { CLink, CButton } from "@/components";
import { Mail, KeyRound } from "lucide-react";
import { CInput, GoogleButton } from "@/components/Auth";
import { useAuth, useProtectedRoute } from "@/hooks";

export const AuthPage = () => {
  useProtectedRoute(false);
  const { isLoading, setEmail, setPassword, email, password, auth } = useAuth();

  const Inputs = [
    {
      Icon: Mail,
      name: "mail",
      id: "mail",
      placeholder: "Tu correo:",
      type: "email",
      label: "Correo",
      setState: setEmail,
      stateValue: email,
    },
    {
      Icon: KeyRound,
      name: "password",
      id: "password",
      placeholder: "Crea una contraseña:",
      type: "password",
      label: "Contraseña",
      setState: setPassword,
      stateValue: password,
    },
  ];

  const Buttons = [
    {
      onClick: () => auth("login"),
      color: "#F4D738",
      text: `${isLoading ? "..." : "Inicia sesión"}`,
    },
    {
      onClick: () => auth("signup"),
      color: "#FF7A5C",
      text: `${isLoading ? "..." : "Crear cuenta"}`,
    },
  ];

  return (
    <RootLayout color="#BD4DC0">
      <main className="space-y-6 rounded-md border-4 border-black bg-white p-6 shadow-nbru lg:p-12">
        <CLink to="/" text="↩︎" color="#69D2E7" />
        <section className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold">BIENVENIDO</h1>
          <p className="text-md text-neutral-500">
            Inicia sesión o crea una cuenta para continuar
          </p>
        </section>
        <form
          className="space-y-5"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {Inputs.map((props, index) => (
            <CInput key={index} {...props} />
          ))}
          <div className="grid grid-cols-2 gap-3">
            {Buttons.map((props, index) => (
              <CButton {...props} key={index} />
            ))}
          </div>
        </form>
        {/* <GoogleButton /> */}
      </main>
    </RootLayout>
  );
};
