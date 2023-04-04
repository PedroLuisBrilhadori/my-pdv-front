import { TableType } from "./types";
import { TableHeader } from "./table-header";
import { TableRows } from "./table-row";
import { Paginator } from "./paginator";
import { Search } from "./search";

export const Table = <T,>({ dataSource, columns, ...props }: TableType<T>) => {
  return (
    <div>
      <Search input={props.search.input} />

      <table className="min-w-full divide-y-2 divide-gray-200 text-sm">
        <thead>
          <TableHeader columns={columns} />
        </thead>

        <tbody className="divide-y divide-gray-200">
          <TableRows
            columns={columns}
            dataSource={dataSource}
            selectedRow={props.selectedRow}
          />
        </tbody>
      </table>
      <div className="w-full h-8">
        <Paginator
          pageChange={props.pageChange}
          maxChange={props.maxChange}
          maxPage={props.max}
          total={props.total}
        />
      </div>
    </div>
  );
};
