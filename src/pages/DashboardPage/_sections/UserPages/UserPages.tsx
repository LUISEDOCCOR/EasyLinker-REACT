import React from "react";
import { PageType } from "@/services";
import { removePageType } from "@/hooks";
import { Card } from "@/components/Pages";

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
            <Card key={page.id} page={page} removePage={removePage} />
          ))
        )}
      </div>
    </section>
  );
};
