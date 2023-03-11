import { SortState } from "./sort";

export enum TableColumnType {
  String = "string",
  Number = "number",
  Boolean = "boolean",
  Currency = "currency",
}

export type TableHeaderType = {
  name: string;
  displayName: string;
  type: TableColumnType;
  booleanTransform?: { false: string; true: string };
  sort?: boolean;
  sortListener?: (sort: SortState) => any;
};

export type TableRowType<T> = {
  columns: TableHeaderType[];
  row: T;
  selectedRow?: (item: T) => any;
};

export type TableRowsType<T> = {
  dataSource: T[];
  columns: TableHeaderType[];
  selectedRow?: (row: T) => any;
};

export type TableType<T> = {
  dataSource: T[];
  columns: TableHeaderType[];
  selectedRow?: (row: T) => any;
};
