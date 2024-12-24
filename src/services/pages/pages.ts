import { getCookie } from "@/utils";
import { CreatePageSchemaType } from "@/zodSchemas";

const API_URL = import.meta.env.VITE_API_URL || "";

export type PageType = {
  description: string;
  title: string;
  route: string;
  links: string;
  id: number;
  userId: number;
};

export const fetchAPICreatePage = async (data: CreatePageSchemaType) => {
  const response = await fetch(`${API_URL}/page/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${getCookie("token")}`,
    },
    body: JSON.stringify({ ...data, links: {} }),
  });
  const json = (await response.json()) as { msg: string; data?: PageType };
  return { json, response };
};

export const fetchAPIUserPages = async () => {
  const response = await fetch(`${API_URL}/page/`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${getCookie("token")}`,
    },
  });
  const json = (await response.json()) as PageType[];
  return { json };
};
