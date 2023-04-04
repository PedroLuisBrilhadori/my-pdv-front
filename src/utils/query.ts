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
    if (!sort) return this.defaultQuery();

    if (this.isDefault()) return (this.query += `&${name}=${sort}`);

    this.removeQuery(name);
    this.query = this.addQuery(`${name}=${sort}`);

    return this.query;
  }

  changePage(page: number) {
    this.page = page;

    if (this.isDefault()) return this.defaultQuery();

    this.removeQuery("page");
    this.query = this.addQuery(`page=${page}`);

    return this.query;
  }

  changeMax(max: number) {
    this.max = max;

    if (this.isDefault()) return this.defaultQuery();

    this.removeQuery("max");
    this.query = this.addQuery(`max=${max}`);

    return this.query;
  }

  private removeQuery(name: string) {
    this.query = this.query
      .split("&")
      .filter((query) => !query.includes(name))
      .join("&");

    if (!this.query.includes(`?`)) this.query = `?${this.query}`;
  }

  private defaultQuery() {
    this.query = `?page=${this.page}&max=${this.max}`;
    return this.query;
  }

  private isDefault() {
    console.log(this.query.split("&"));
    return this.query.split("&").length === 2;
  }

  private addQuery(query: string) {
    const queryArray = this.query.split("&");

    queryArray.push(query);

    return queryArray.join("&");
  }
}
