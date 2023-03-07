export const headers: Headers = new Headers();

const baseUrl = `http://localhost:3001/api`;

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
