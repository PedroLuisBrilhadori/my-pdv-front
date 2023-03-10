import { TableColumnType, TableHeaderType } from "../types";

export const TableCell = ({ children }: { children: JSX.Element | string }) => {
  return (
    <td className="whitespace-nowrap px-4 py-2 text-gray-900">{children}</td>
  );
};

export function renderColumnTypes(
  item: any,
  column: TableHeaderType
): JSX.Element {
  const booleanColumn = () => {
    const key = String(item) as "false" | "true";
    const content = column?.booleanTransform
      ? column.booleanTransform[key]
      : String(item);

    return <TableCell>{content}</TableCell>;
  };

  const currencyColumn = () => {
    const formatter = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    const content = formatter.format(item);

    return <TableCell>{content}</TableCell>;
  };

  switch (column.type) {
    case TableColumnType.Boolean:
      return booleanColumn();
    case TableColumnType.Currency:
      return currencyColumn();
    default:
      return <TableCell>{item}</TableCell>;
  }
}
