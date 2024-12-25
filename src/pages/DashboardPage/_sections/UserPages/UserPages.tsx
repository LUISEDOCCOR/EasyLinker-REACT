import { Trash, Pencil, Link as LinkIcon } from "lucide-react";
import React from "react";
import { PageType } from "@/services";
import { removePageType } from "@/hooks";
import { Link } from "react-router-dom";

export interface UserPagesProps {
  isLoading: boolean;
  pages: PageType[] | undefined;
  removePage: removePageType;
}

export const UserPages: React.FC<UserPagesProps> = ({
  isLoading,
  pages,
  removePage,
}) => {
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
                    removePage(page.id);
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
