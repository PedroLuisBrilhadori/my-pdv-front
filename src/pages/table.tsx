import { useEffect, useState } from "react";
import {
  Page,
  Table,
  TableColumnType,
  TableHeaderType,
  InputType,
} from "../components";
import { ApiRoutes, getToken } from "../services/api";
import { Query } from "../utils";

export default function Home() {
  const [query, st] = useState(new Query(1, 5));
  const [productsQuery, setQuery] = useState(query.query);

  const columns: TableHeaderType[] = [
    {
      name: "name",
      displayName: "Nome",
      type: TableColumnType.String,
      sort: true,
      sortListener: (state, name) => setQuery(query.order(name, state)),
    },
    {
      name: "price",
      displayName: "Preço",
      type: TableColumnType.Currency,
      sort: true,
      sortListener: (state, name) => setQuery(query.order(name, state)),
    },
    {
      name: "unit",
      displayName: "Preço Por:",
      type: TableColumnType.Boolean,
      booleanTransform: { true: "Unidade", false: "Kg" },
    },
  ];

  const input: InputType = {
    placeholder: "Buscar Produto...",
    label: "Buscar Produto",
    onChange: ({ target: { value } }) => setQuery(query.search(value)),
  };

  const [dataSource, setDataSource] = useState({
    data: [] as Product[],
    total: 0,
    totalPages: 0,
  });

  useEffect(() => {
    const token = getToken();
    if (token) {
      getProducts(productsQuery).then(({ data, total }) => {
        setDataSource({
          data,
          total,
          totalPages: query.maxItems(),
        });
      });
    }
  }, [productsQuery, query]);

  return (
    <Page taskBar={true}>
      <Table
        total={dataSource.total}
        max={dataSource.totalPages}
        pageChange={(page) => setQuery(query.changePage(page))}
        maxChange={(max) => setQuery(query.changeMax(max))}
        columns={columns}
        dataSource={dataSource.data}
        selectedRow={(row) => {
          console.log(row);
        }}
        search={{ input }}
      ></Table>
    </Page>
  );
}

export type Product = {
  name: string;
  price: number;
  unit: boolean;
};

export type GetProducts = {
  data: Product[];
  page: number;
  total: number;
};

async function getProducts(query: string) {
  const response = await fetch(ApiRoutes.products.base + query);

  const { data, page, total } = await response.json();

  return { data, page, total } as GetProducts;
}
