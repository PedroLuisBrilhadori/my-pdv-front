import { HeaderSort, useSort } from "../sort";
import { TableHeaderType } from "../types";

function Item({ displayName, ...props }: TableHeaderType) {
  const sort = props.sort ? true : false;
  const [sortState, next] = useSort();

  return (
    <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
      {sort ? (
        <HeaderSort
          displayName={displayName}
          sortState={sortState}
          onClick={() => next(props.sortListener)}
        />
      ) : (
        displayName
      )}
    </th>
  );
}

export const TableHeader = ({ columns }: { columns: TableHeaderType[] }) => {
  return (
    <tr>
      {columns.map((column, key) => (
        <Item
          name={column.name}
          displayName={column.displayName}
          type={column.type}
          sort={column.sort}
          sortListener={column.sortListener}
          key={key}
        />
      ))}
    </tr>
  );
};
