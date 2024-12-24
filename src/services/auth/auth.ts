const API_URL = import.meta.env.VITE_API_URL || "";

export const fetchAPIAuth = async (
  data: { email: string; password: string },
  action: "login" | "signup",
) => {
  const response = await fetch(`${API_URL}/auth/${action}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  const json = (await response.json()) as {
    msg: string;
    token?: string;
    email?: string;
  };
  return { json, response };
};
