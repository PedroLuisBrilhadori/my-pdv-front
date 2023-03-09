export type TableHeaderType = {
  name: string;
  displayName: string;
};

export type TableRowType<T> = {
  dataSource: T[];
  columns: TableHeaderType[];
};

export type TableType<T> = {
  dataSource: T[];
  columns: TableHeaderType[];
};
