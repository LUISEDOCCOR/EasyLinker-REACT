import { DashboardLayout } from "@/layouts";
import { useProtectedRoute, useAuthContext } from "@/hooks";
import { CButton } from "@/components";
import { LogOut, Trash, Pencil, Link as LinkIcon } from "lucide-react";
import { CreatePage } from "./_sections";
import { useEffect, useState } from "react";
import { PageType, fetchAPIUserPages } from "@/services";
import { Link } from "react-router-dom";

export const DashboardPage = () => {
  useProtectedRoute();
  const { Logout, email } = useAuthContext();
  const [pages, setPages] = useState<PageType[]>();
  const [isLoading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { json } = await fetchAPIUserPages();
      setPages(json);
      setLoading(false);
    };
    if (!pages) {
      fetchData();
    }
  }, [pages]);

  return (
    <DashboardLayout color="#BD4DC0">
      <header className="flex items-center justify-between">
        <div className="space-y-4">
          <h1 className="text-3xl font-extrabold uppercase">EasyLinker</h1>
          <span className="text-md">📧 {email}</span>
        </div>
        <div className="hidden w-28 md:block xl:w-32">
          <CButton onClick={Logout} color="#F16D6E" text="Salir">
            <LogOut width={24} />
          </CButton>
        </div>
      </header>
      <main className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
        <CreatePage setPages={setPages} />
        <section className="space-y-4 rounded-md bg-white p-6 lg:space-y-8">
          <h2 className="text-xl font-semibold">TUS PÁGINAS</h2>
          {isLoading ? (
            <span role="alert">Cargando...</span>
          ) : pages?.length == 0 ? (
            <span role="alert">No tienes páginas</span>
          ) : (
            pages?.map((page) => (
              <div
                className="flex items-center justify-between rounded-md border-2 border-black p-4"
                key={page.id}
              >
                <div className="flex flex-col">
                  <span className="text-md font-semibold">{page.title}</span>
                  <span className="text-sm">{page.description}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Link
                    to={`/edit/${page.id}`}
                    className="rounded-full border-2 border-black bg-blue-400 p-3 transition-transform hover:scale-105"
                  >
                    <Pencil />
                  </Link>
                  <Link
                    to={`/remove/${page.id}`}
                    className="rounded-full border-2 border-black bg-red-400 p-3 transition-transform hover:scale-105"
                  >
                    <Trash />
                  </Link>
                  <Link
                    to={`/${page.route}`}
                    className="rounded-full border-2 border-black bg-green-400 p-3 transition-transform hover:scale-105"
                  >
                    <LinkIcon />
                  </Link>
                </div>
              </div>
            ))
          )}
        </section>
      </main>
    </DashboardLayout>
  );
};
