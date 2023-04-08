import { SearchType } from "../search/types";
import { TableColumnType, TableHeaderType } from "../table-header";
import { TableType } from "../types";

export interface mockUserData {
  name: string;
  age: number;
  salary: number;
  active: boolean;
}

export const mockDataSource: mockUserData[] = [
  { name: "Pedro", age: 19, salary: 2000.6, active: true },
  { name: "Gabriela", age: 30, salary: 2010.6, active: true },
  { name: "Karina", age: 45, salary: 1000.6, active: true },
  { name: "Joana", age: 22, salary: 3000.6, active: false },
  { name: "Paulo", age: 18, salary: 2000.6, active: true },
  { name: "Marcelo", age: 49, salary: 900.6, active: true },
  { name: "Alcides", age: 29, salary: 2010.6, active: false },
  { name: "Rafa", age: 10, salary: 3000.0, active: true },
  { name: "Cecilia", age: 12, salary: 10, active: false },
  { name: "Alceu", age: 68, salary: 200, active: true },
  { name: "Carlos", age: 25, salary: 2, active: true },
];

export const mockColumns: TableHeaderType[] = [
  {
    name: "name",
    displayName: "Name",
    type: TableColumnType.String,
    sort: true,
    sortListener: (sort) => console.log(sort),
  },
  { name: "age", displayName: "Age", type: TableColumnType.Number },
  { name: "salary", displayName: "Salary", type: TableColumnType.Currency },
  { name: "active", displayName: "Active", type: TableColumnType.Boolean },
];

export const mockSearch: SearchType = {
  input: {
    placeholder: "Search User...",
    label: "Search User",
    onChange: (search) => search,
  },
};

export const mockTableProps: TableType<mockUserData> = {
  dataSource: mockDataSource,
  columns: mockColumns,
  pageChange: (page) => page,
  maxChange: (max) => max,
  max: 5,
  total: mockDataSource.length,
  search: mockSearch,
  selectedRow: (row) => row,
};
