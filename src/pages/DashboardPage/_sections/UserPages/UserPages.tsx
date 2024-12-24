import { Trash, Pencil, Link as LinkIcon } from "lucide-react";
import React, { useEffect, useState, Dispatch } from "react";
import { PageType, fetchAPIUserPages, fetchAPIRemovePage } from "@/services";
import { Link } from "react-router-dom";
import { toast } from "sonner";

export interface UserPagesProps {
  setPages: Dispatch<React.SetStateAction<PageType[] | undefined>>;
  pages: PageType[] | undefined;
}

export const UserPages: React.FC<UserPagesProps> = ({ setPages, pages }) => {
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

  const handleClickRemove = async (id: number) => {
    if (confirm("Está seguro que quiere eliminar la página ?")) {
      const { response, json } = await fetchAPIRemovePage(id);
      toast(json.msg);
      if (response.status == 200) {
        const newPages = pages?.filter((item) => item.id != id);
        setPages(newPages);
      }
    }
  };

  return (
    <section className="space-y-4 rounded-md bg-white p-6 lg:space-y-8">
      <h2 className="text-xl font-semibold">TUS PÁGINAS</h2>
      <div className="max-h-96 space-y-3 overflow-scroll">
        {isLoading ? (
          <span role="alert">Cargando...</span>
        ) : pages?.length == 0 ? (
          <span role="alert">No tienes páginas</span>
        ) : (
          pages?.map((page) => (
            <div
              className="flex items-center justify-between gap-2 rounded-md border-2 border-black p-4"
              key={page.id}
            >
              <div className="flex flex-col">
                <span className="text-md font-semibold">{page.title}</span>
                <span className="text-sm">{page.description}</span>
              </div>
              <div className="flex items-center gap-2">
                <Link
                  to={`/edit/${page.id}`}
                  className="rounded-full border-2 border-black bg-blue-400 p-1 transition-transform hover:scale-105 lg:p-3"
                >
                  <Pencil />
                </Link>
                <button
                  onClick={() => {
                    handleClickRemove(page.id);
                  }}
                  className="rounded-full border-2 border-black bg-red-400 p-1 transition-transform hover:scale-105 lg:p-3"
                >
                  <Trash />
                </button>
                <Link
                  to={`/${page.route}`}
                  className="rounded-full border-2 border-black bg-green-400 p-1 transition-transform hover:scale-105 lg:p-3"
                >
                  <LinkIcon />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
