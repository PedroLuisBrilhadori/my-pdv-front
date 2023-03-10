import { useEffect, useState } from "react";
import { Page, Table, TableColumnType, TableHeaderType } from "../components";
import { ApiRoutes, getToken } from "../services/api";

export default function Home() {
  const [productsQuery, setQuery] = useState("");
  const columns: TableHeaderType[] = [
    {
      name: "name",
      displayName: "Nome",
      type: TableColumnType.String,
      sort: true,
      sortListener: (state) => setQuery(`?name=${state}`),
    },
    {
      name: "price",
      displayName: "Preço",
      type: TableColumnType.Currency,
      sort: true,
      sortListener: (state) => setQuery(`?price=${state}`),
    },
    {
      name: "unit",
      displayName: "Preço Por:",
      type: TableColumnType.Boolean,
      booleanTransform: { true: "Unidade", false: "Kg" },
    },
  ];

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const token = getToken();
    if (token) {
      getProducts(productsQuery).then((products) => setDataSource(products));
    }
  }, [productsQuery]);

  return (
    <Page taskBar={true}>
      <Table columns={columns} dataSource={dataSource}></Table>
    </Page>
  );
}

async function getProducts(query: string) {
  const response = await fetch(ApiRoutes.products.base + query);

  const { products } = await response.json();

  return products;
}
