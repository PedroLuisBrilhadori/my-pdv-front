import { get } from "lodash";
import { TableHeaderType, TableRowType, TableRowsType } from "../types";
import { renderCell } from "./row-types";

function Cell<T>({ row, column }: { row: T; column: TableHeaderType }) {
  const cell = get(row, column.name);

  return renderCell(cell, column);
}

const TableRow = <T,>({ columns, row, ...props }: TableRowType<T>) => {
  return (
    <tr
      className="cursor-pointer transition duration-150 ease-in-out hover:bg-gray-200 focus:bg-gray-200  focus:outline-none focus:ring-0 active:bg-gray-300"
      onClick={() => {
        if (props.selectedRow) props.selectedRow(row);
      }}
    >
      {columns.map((column, i) => (
        <Cell key={i} row={row} column={column} />
      ))}
    </tr>
  );
};

export const TableRows = <T,>({
  dataSource,
  columns,
  ...props
}: TableRowsType<T>) => {
  return (
    <>
      {dataSource.map((row, key) => (
        <TableRow
          key={key}
          columns={columns}
          row={row}
          selectedRow={props.selectedRow}
        />
      ))}
    </>
  );
};
