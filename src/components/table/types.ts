import { TableHeaderType } from "./table-header";

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
