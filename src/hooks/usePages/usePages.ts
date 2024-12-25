import { useState, useEffect } from "react";
import {
  PageType,
  fetchAPIUserPages,
  fetchAPIRemovePage,
  fetchAPICreatePage,
} from "@/services";
import { toast } from "sonner";
import { CreatePageSchemaType } from "@/zodSchemas";
import { UseFormReset } from "react-hook-form";

export type createPageType = (
  data: CreatePageSchemaType,
  reset: UseFormReset<any>,
) => Promise<void>;

export type removePageType = (id: number) => Promise<void>;

export const usePages = () => {
  const [pages, setPages] = useState<PageType[]>();
  const [isLoading, setLoading] = useState<boolean>(false);

  const createPage = async (
    data: CreatePageSchemaType,
    reset: UseFormReset<any>,
  ) => {
    try {
      const { json, response } = await fetchAPICreatePage(data);
      toast(json.msg);
      if (json.data && response.ok) {
        setPages((prev) => prev && ([json.data, ...prev] as PageType[]));
      }
    } catch {
      toast("Hubo un error, vuelve a intentarlo más tarde.");
    } finally {
      reset();
    }
  };

  const removePage = async (id: number) => {
    if (confirm("Está seguro que quiere eliminar la página ?")) {
      const { response, json } = await fetchAPIRemovePage(id);
      toast(json.msg);
      if (response.status == 200) {
        const newPages = pages?.filter((item) => item.id != id);
        setPages(newPages);
      }
    }
  };

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

  return { isLoading, pages, removePage, createPage };
};
