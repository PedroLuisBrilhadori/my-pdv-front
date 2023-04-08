import { SortState } from "../sort";

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
  sortListener?: (sort: SortState, name: string) => any;
};
