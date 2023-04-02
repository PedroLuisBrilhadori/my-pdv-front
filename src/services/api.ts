import { parseCookies } from "nookies";

export const headers: Headers = new Headers();

const baseUrl = `https://localhost:3001`;

export const ApiRoutes = {
  auth: {
    login: `${baseUrl}/auth/login`,
  },
  user: {
    get: `${baseUrl}/user/`,
  },
  products: {
    base: `${baseUrl}/products`,
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
