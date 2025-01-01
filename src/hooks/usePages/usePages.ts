import { useState, useEffect } from "react";
import {
  PageType,
  fetchAPIUserPages,
  fetchAPIRemovePage,
  fetchAPICreatePage,
  fetchAPIGetPageById,
} from "@/services";
import { toast } from "sonner";
import { CreatePageSchemaType } from "@/zodSchemas";
import { UseFormReset } from "react-hook-form";
import { useNavigate } from "react-router-dom";

export type createPageType = (
  data: CreatePageSchemaType,
  reset: UseFormReset<any>,
) => Promise<void>;

export type removePageType = (id: number, title: string) => Promise<void>;

export const usePages = ({ autoFetch = true }: { autoFetch?: boolean }) => {
  const [pages, setPages] = useState<PageType[]>();
  const [page, setPage] = useState<PageType>();
  const [isLoading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const createPage = async (
    data: CreatePageSchemaType,
    reset: UseFormReset<any>,
  ) => {
    try {
      const { json, response } = await fetchAPICreatePage(data);
      json.msg && toast(json.msg);
      if (json.data && response.ok) {
        setPages((prev) => prev && ([json.data, ...prev] as PageType[]));
      }
    } catch {
      toast("Hubo un error, vuelve a intentarlo más tarde.");
    } finally {
      reset();
    }
  };

  const removePage = async (id: number, title: string) => {
    try {
      if (confirm(`¿Está seguro que quiere eliminar la página ${title} ?`)) {
        const { response, json } = await fetchAPIRemovePage(id);
        json.msg && toast(json.msg);
        if (response.status == 200) {
          const newPages = pages?.filter((item) => item.id != id);
          setPages(newPages);
        }
      }
    } catch {
      toast("Hubo un error, vuelve a intentarlo más tarde.");
    }
  };

  const getPageById = async (id: number) => {
    try {
      const { response, json } = await fetchAPIGetPageById(id);
      json.msg && toast(json.msg);
      response.status != 200 && navigate("/dashboard");
      if (response.status == 200) {
        setLoading(true);
        setPage(json?.page);
      }
    } catch {
      toast("Hubo un error, vuelve a intentarlo más tarde.");
      navigate("/dashboard");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { json } = await fetchAPIUserPages();
        setPages(json);
        setLoading(false);
      } catch {
        toast("Hubo un error, vuelve a intentarlo más tarde.");
      }
    };
    if (!pages && autoFetch) {
      fetchData();
    }
  }, [pages]);

  return { isLoading, pages, removePage, createPage, getPageById, page };
};
