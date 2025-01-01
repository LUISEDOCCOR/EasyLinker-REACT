import { Trash, Pencil, Link as LinkIcon } from "lucide-react";
import { PageType } from "@/services";
import { removePageType } from "@/hooks";
import { Link } from "react-router-dom";
import React from "react";

export interface CardProps {
  page: PageType;
  removePage: removePageType;
}

export const Card: React.FC<CardProps> = ({ page, removePage }) => {
  return (
    <div className="flex items-center justify-between gap-2 rounded-md border-2 border-black p-4">
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
            removePage(page.id, page.title);
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
  );
};
