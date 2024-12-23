import Cookies from "universal-cookie";

export const getCookie = (name: string) => {
  const cookies = new Cookies();
  return cookies.get(name);
};

export const setCookie = ({ key, value }) => {
  const expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 29);
  const cookies = new Cookies();
  cookies.set(key, value, {
    path: "/",
    expires: expirationDate,
  });
};

export const removeCookie = (name: string) => {
  const cookies = new Cookies();
  cookies.remove(name, { path: "/" });
};
