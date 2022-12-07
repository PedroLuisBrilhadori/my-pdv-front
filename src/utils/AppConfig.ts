// FIXME: Update this configuration file based on your project information

export const AppConfig = {
  site_name: 'Starter',
  title: 'Nextjs Starter',
  description: 'Starter code for your Nextjs Boilerplate with Tailwind CSS',
  locale: 'en',
};

export const baseUrl = `http://localhost:3001/api`;

export const APIroutes = {
  products: {
    create: `${baseUrl}/products/create`,
    update: `${baseUrl}/products/update`,
    delete: `${baseUrl}/products/delete`,
    get: `${baseUrl}/products/`,
  },
};
