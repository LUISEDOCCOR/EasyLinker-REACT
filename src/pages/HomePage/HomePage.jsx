import { Globe, Users, Zap, DollarSign } from "lucide-react";
import { Button } from "@/components";

export const HomePage = () => {
  const reasons = [
    {
      title: "CONTROL TOTAL",
      description:
        "Tu sitio, tus reglas. Sin algoritmos que limiten tu alcance.",
      icon: Globe,
    },
    {
      title: "PROFESIONALISMO",
      description: "Destaca en tu industria con una presencia web pulida.",
      icon: Users,
    },
    {
      title: "DISPONIBILIDAD 24/7",
      description: "Tu web trabaja incluso cuando tú duermes.",
      icon: Zap,
    },
    {
      title: "OPORTUNIDADES DE NEGOCIO",
      description: "Atrae clientes y colaboraciones con tu portafolio online.",
      icon: DollarSign,
    },
  ];

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center gap-12 bg-cOrange p-6 lg:p-0">
      <header className="space-y-5 text-center">
        <h1 className="text-3xl font-extrabold leading-snug lg:text-4xl xl:text-6xl">
          TU PROPIA WEB <br /> ES TU PODER
        </h1>
        <h2 className="text-lg font-semibold leading-tight lg:text-xl xl:text-2xl">
          En la era digital, no tener una web es como no existir. <br />
          Descubre por qué necesitas tu espacio en internet.
        </h2>
      </header>
      <main className="w-full lg:max-w-3xl xl:max-w-5xl">
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-2">
          {reasons.map((reason, index) => (
            <article
              className="rounded-md border-4 border-black bg-white p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:space-y-3 lg:px-4 lg:py-4 xl:space-y-4 xl:px-6 xl:py-8"
              key={index}
            >
              <div className="flex items-center justify-between">
                <h3 className="font-bold lg:text-lg xl:text-xl">
                  {reason.title}
                </h3>
                <reason.icon size={24} className="text-orange-600" />
              </div>
              <p className="lg:text-md text-neutral-500 xl:text-lg">
                {reason.description}
              </p>
            </article>
          ))}
          <article className="col-span-1 flex flex-col items-center justify-center gap-3 border-4 border-black bg-[#f1f1f1] p-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] lg:col-span-2 lg:px-4 lg:py-4 xl:space-y-4 xl:px-6 xl:py-8">
            <h3 className="font-bold lg:text-xl xl:text-2xl">
              ¿LISTO PARA BRILLAR EN LA WEB?
            </h3>
            <p className="lg:text-md text-neutral-500 xl:text-xl">
              No esperes más. Tu futuro digital comienza ahora.
            </p>
            <Button text="CREA TU WEB AHORA →" color="#4AD97C" />
          </article>
        </section>
      </main>
      <footer>
        <p className="text-center font-semibold lg:text-left lg:text-lg xl:text-xl">
          Únete a miles de profesionales que ya tienen su espacio en la web
        </p>
      </footer>
    </div>
  );
};
