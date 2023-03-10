import { get } from "lodash";
import { TableHeaderType, TableRowType } from "../types";
import { renderColumnTypes } from "./columns-types";

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
