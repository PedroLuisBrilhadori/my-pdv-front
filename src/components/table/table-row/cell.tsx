import { get } from "lodash";
import { TableColumnType, TableHeaderType } from "../table-header";

export function Cell<T>({ row, column }: { row: T; column: TableHeaderType }) {
  const cell = get(row, column.name);

  return renderCell(cell, column);
}

export function renderCell(item: any, column: TableHeaderType): JSX.Element {
  switch (column.type) {
    case TableColumnType.Boolean:
      return booleanCell(item, column);
    case TableColumnType.Currency:
      return currencyCell(item);
    default:
      return <TableCell>{item}</TableCell>;
  }
}

export const TableCell = ({ children }: { children: JSX.Element | string }) => {
  return (
    <td className="whitespace-nowrap px-4 py-2 text-gray-900">{children}</td>
  );
};

const currencyCell = (item: any) => {
  const formatter = Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const content = formatter.format(item);

  return <TableCell>{content}</TableCell>;
};

const booleanCell = (item: any, column: TableHeaderType) => {
  const key = String(item) as "false" | "true";
  const content = column?.booleanTransform
    ? column.booleanTransform[key]
    : String(item);

  return <TableCell>{content}</TableCell>;
};
