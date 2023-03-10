import { useEffect, useState } from "react";
import { Page, Table, TableColumnType, TableHeaderType } from "../components";
import { ApiRoutes, getToken } from "../services/api";

export default function Home() {
  const columns: TableHeaderType[] = [
    { name: "name", displayName: "Nome", type: TableColumnType.String },
    { name: "price", displayName: "Preço", type: TableColumnType.Currency },
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
      getProducts().then((products) => setDataSource(products));
    }
  }, []);

  return (
    <Page taskBar={true}>
      <Table columns={columns} dataSource={dataSource}></Table>
    </Page>
  );
}

async function getProducts() {
  const response = await fetch(ApiRoutes.products.get("name", "asc"));

  const { products } = await response.json();

  return products;
}
