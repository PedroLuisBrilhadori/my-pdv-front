import { useEffect, useState } from "react";
import { Page, Table, TableHeaderType } from "../components";
import { ApiRoutes } from "../services/api";

export default function Home() {
  const columns: TableHeaderType[] = [
    { name: "name", displayName: "Nome" },
    { name: "price", displayName: "Preço" },
    { name: "unit", displayName: "Preço Por:" },
  ];

  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    getProducts().then((products) => setDataSource(products));
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
