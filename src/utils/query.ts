import { SortState } from "../components";

export class Query {
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

  order(name: string, sort: SortState) {
    if (sort) this.query = `?page=${this.page}&max=${this.max}&${name}=${sort}`;
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
