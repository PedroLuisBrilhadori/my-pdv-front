import { TableType } from "./types";
import { TableHeader } from "./table-header";
import { TableRows } from "./table-row";
import { Paginator } from "./paginator";

export const Table = <T,>({ dataSource, columns, ...props }: TableType<T>) => {
  return (
    <div>
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
          maxPage={props.total}
        />
      </div>
    </div>
  );
};
