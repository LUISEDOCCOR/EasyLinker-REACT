import { RootLayout } from "@/layouts";
import { CLink, CButton } from "@/components";
import { useAuth, useProtectedRoute } from "@/hooks";
import { LoginForm, SignUpForm } from "./_sections";

export const AuthPage = () => {
  useProtectedRoute(false);

  const { auth, currentAction, setCurrentAction } = useAuth();

  const Options = [
    {
      onClick: () => setCurrentAction("login"),
      color: "#F4D738",
      text: "Iniciar sesión",
      disabled: currentAction == "login",
    },
    {
      onClick: () => setCurrentAction("signup"),
      color: "#FF7A5C",
      text: "Crear cuenta",
      disabled: currentAction == "signup",
    },
  ];

  const onSubmit = (data) => {
    auth(data);
  };

  return (
    <RootLayout color="#BD4DC0">
      <main className="space-y-6 rounded-md border-4 border-black bg-white p-6 shadow-nbru lg:p-12">
        <CLink to="/" text="↩︎" color="#69D2E7" />
        <section className="space-y-2 text-center">
          <h1 className="text-3xl font-extrabold">BIENVENIDO</h1>
          <p className="text-md text-neutral-500">
            Inicia sesión o crea una cuenta para continuar
          </p>
          <div className="grid grid-cols-2 gap-3">
            {Options.map((props, index) => (
              <CButton {...props} key={index} />
            ))}
          </div>
        </section>
        {currentAction == "signup" ? (
          <SignUpForm onSubmit={onSubmit} />
        ) : (
          <LoginForm onSubmit={onSubmit} />
        )}
      </main>
    </RootLayout>
  );
};
