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
};

export type TableRowType<T> = {
  dataSource: T[];
  columns: TableHeaderType[];
};

export type TableType<T> = {
  dataSource: T[];
  columns: TableHeaderType[];
};
