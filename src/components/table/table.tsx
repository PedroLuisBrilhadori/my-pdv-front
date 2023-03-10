import { get } from "lodash";
import {
  TableColumnType,
  TableHeaderType,
  TableRowType,
  TableType,
} from "./types";

export const Table = <T,>({ dataSource, columns }: TableType<T>) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead>
          <TableHeader columns={columns} />
        </thead>

        <tbody className="divide-y divide-gray-200">
          <TableRow columns={columns} dataSource={dataSource} />
        </tbody>
      </table>
    </div>
  );
};

export const TableHeader = ({ columns }: { columns: TableHeaderType[] }) => {
  function Item({ displayName, type }: TableHeaderType) {
    return (
      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
        <div className="flex items-center">{displayName}</div>
      </th>
    );
  }

  return (
    <tr>
      {columns.map((column, key) => (
        <Item
          name={column.name}
          displayName={column.displayName}
          type={column.type}
          key={key}
        />
      ))}
    </tr>
  );
};

export const TableRow = <T,>({ dataSource, columns }: TableRowType<T>) => {
  function Item({ data, column }: { data: T; column: TableHeaderType }) {
    const item = get(data, column.name);

    return renderColumnTypes(item, column);
  }

  return (
    <>
      {dataSource.map((item, i) => (
        <tr key={i}>
          {columns.map((column, i) => (
            <Item key={i} data={item} column={column} />
          ))}
        </tr>
      ))}
    </>
  );
};

function renderColumnTypes(item: any, column: TableHeaderType): JSX.Element {
  const booleanColumn = () => {
    const key = String(item) as "false" | "true";
    const content = column?.booleanTransform
      ? column.booleanTransform[key]
      : String(item);

    return (
      <td className="whitespace-nowrap px-4 py-2 text-gray-900">{content}</td>
    );
  };

  const currencyColumn = () => {
    const formatter = Intl.NumberFormat("pt-br", {
      style: "currency",
      currency: "BRL",
    });
    const content = formatter.format(item);

    return (
      <td className="whitespace-nowrap px-4 py-2 text-gray-900">{content}</td>
    );
  };

  switch (column.type) {
    case TableColumnType.Boolean:
      return booleanColumn();
    case TableColumnType.Currency:
      return currencyColumn();
    default:
      return (
        <td className="whitespace-nowrap px-4 py-2 text-gray-900">{item}</td>
      );
  }
}
