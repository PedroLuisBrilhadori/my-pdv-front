import { SearchType } from "../search/types";
import { TableColumnType, TableHeaderType } from "../table-header";
import { TableType } from "../types";

export interface mockUserData {
  name: string;
  age: number;
}

export const mockDataSource: mockUserData[] = [
  { name: "Pedro", age: 19 },
  { name: "Gabriela", age: 30 },
  { name: "Karina", age: 45 },
  { name: "Joana", age: 22 },
  { name: "Paulo", age: 18 },
  { name: "Marcelo", age: 49 },
  { name: "Alcides", age: 29 },
  { name: "Rafa", age: 10 },
  { name: "Cecilia", age: 12 },
  { name: "Alceu", age: 68 },
  { name: "Carlos", age: 25 },
];

export const mockColumns: TableHeaderType[] = [
  { name: "name", displayName: "Name", type: TableColumnType.String },
  { name: "age", displayName: "Age", type: TableColumnType.Number },
];

export const mockSearch: SearchType = {
  input: {
    placeholder: "Search User...",
    label: "Search User",
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
