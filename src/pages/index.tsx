import { useEffect, useState } from "react";
import {
  Page,
  SortState,
  Table,
  TableColumnType,
  TableHeaderType,
} from "../components";
import { ApiRoutes, getToken } from "../services/api";
import { PaginatorType } from "../components/table/paginator";

export default function Home() {
  const [query, st] = useState(new Query(1, 5));
  const [productsQuery, setQuery] = useState(query.query);

  const columns: TableHeaderType[] = [
    {
      name: "name",
      displayName: "Nome",
      type: TableColumnType.String,
      sort: true,
      sortListener: (state) => setQuery(query.orderName(state)),
    },
    {
      name: "price",
      displayName: "Preço",
      type: TableColumnType.Currency,
      sort: true,
      sortListener: (state) => setQuery(query.orderPrice(state)),
    },
    {
      name: "unit",
      displayName: "Preço Por:",
      type: TableColumnType.Boolean,
      booleanTransform: { true: "Unidade", false: "Kg" },
    },
  ];

  const [dataSource, setDataSource] = useState({
    data: [],
    totalPages: 0,
  });

  console.log(query.query);

  useEffect(() => {
    const token = getToken();
    if (token) {
      getProducts(productsQuery).then(({ data, total, page }) => {
        setDataSource({
          data,
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
        total={dataSource.totalPages}
        pageChange={(page) => setQuery(query.changePage(page))}
        maxChange={(max) => setQuery(query.changeMax(max))}
        columns={columns}
        dataSource={dataSource.data}
        selectedRow={(row) => {
          console.log(row);
        }}
      ></Table>
    </Page>
  );
}
class Query {
  private page: number;
  private max: number;
  query: string;

  constructor(page: number, max: number) {
    this.page = page;
    this.max = max;

    this.query = `?page=${this.page}&max=${this.max}`;
  }

  maxItems() {
    return this.max;
  }

  orderName(name: SortState) {
    if (name) this.query = `?page=${this.page}&max=${this.max}?name=${name}`;
    else this.defaultQuery();

    return this.query;
  }

  orderPrice(price: SortState) {
    if (price) this.query = `?page=${this.page}&max=${this.max}?price=${price}`;
    else this.defaultQuery();

    return this.query;
  }

  changePage(page: number) {
    this.page = page;
    this.query = `?page=${this.page}&max=${this.max}`;
    return this.query;
  }

  changeMax(max: number) {
    this.max = max;
    this.query = `?page=${this.page}&max=${this.max}`;
    return this.query;
  }

  private defaultQuery() {
    this.query = `?page=${this.page}&max=${this.max}`;
  }
}

async function getProducts(query: string) {
  const response = await fetch(ApiRoutes.products.base + query);

  const { data, page, total } = await response.json();

  return { data, page, total };
}
