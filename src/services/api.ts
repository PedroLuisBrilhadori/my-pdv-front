import { GetServerSidePropsContext, PreviewData } from "next";
import { parseCookies } from "nookies";
import { ParsedUrlQuery } from "querystring";

export const headers: Headers = new Headers();

const baseUrl = `https://localhost:3001/api`;

export const ApiRoutes = {
  user: {
    login: `${baseUrl}/user/login`,
    register: `${baseUrl}/user/register`,
    get: `${baseUrl}/user/`,
  },
  products: {
    delete: (id: string) => `${baseUrl}/products/${id}`,
    put: (id: string) => `${baseUrl}/products/${id}`,
    create: `${baseUrl}/products`,
    get: (prop?: "name" | "price", order?: "asc" | "desc") =>
      `${baseUrl}/products?${prop}=${order}`,
  },
};

export const getToken = (): string | void => {
  const { ["nextauth.token"]: token } = parseCookies();

  if (!token) {
    return;
  }

  return token;
};

export async function getProducts() {
  const response = await fetch(ApiRoutes.products.get("name", "asc"));

  const { products } = await response.json();

  return products;
}
