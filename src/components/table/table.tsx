import { TableType } from "./types";
import { TableHeader } from "./table-header";
import { TableRow } from "./table-row";

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
