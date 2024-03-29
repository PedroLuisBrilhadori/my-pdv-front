import { useEffect, useState } from "react";
import { Page, Table, TableColumnType, TableHeaderType } from "../components";
import { ApiRoutes, getToken } from "../services/api";
import { Query } from "../utils";
import { InputType } from "../components/table/search/types";

export default function Home() {
  const [query, st] = useState(new Query(1, 5));
  const [productsQuery, setQuery] = useState(query.query);

  const columns: TableHeaderType[] = [
    {
      name: "name",
      displayName: "Nome",
      type: TableColumnType.String,
      sort: true,
      sortListener: (state) => setQuery(query.order("name", state)),
    },
    {
      name: "price",
      displayName: "Preço",
      type: TableColumnType.Currency,
      sort: true,
      sortListener: (state) => setQuery(query.order("price", state)),
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
    data: [],
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
          totalPages: Math.floor(
            (total + query.maxItems() - 1) / query.maxItems()
          ),
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

async function getProducts(query: string) {
  const response = await fetch(ApiRoutes.products.base + query);

  const { data, page, total } = await response.json();

  return { data, page, total };
}
