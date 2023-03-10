import { SortIcon, useSort } from "../sort";
import { TableHeaderType } from "../types";

export const TableHeader = ({ columns }: { columns: TableHeaderType[] }) => {
  function Item({ displayName, ...props }: TableHeaderType) {
    const [sortState, next] = useSort();
    const sort = props.sort ? true : false;

    return (
      <th className="whitespace-nowrap px-4 py-2 text-left font-medium text-gray-900">
        {sort ? (
          <div
            className="flex items-center cursor-pointer w-fit"
            onClick={() => next()}
          >
            {displayName}
            <SortIcon state={sortState} />
          </div>
        ) : (
          displayName
        )}
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
