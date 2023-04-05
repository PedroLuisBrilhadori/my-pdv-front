import { Table } from "../components";
import { mockTableProps } from "../components/table/mocks";

const Test = () => {
  const {
    dataSource,
    columns,
    total,
    max,
    search,
    pageChange,
    maxChange,
    selectedRow,
  } = mockTableProps;

  return (
    <Table
      dataSource={dataSource}
      columns={columns}
      total={total}
      max={max}
      search={search}
      pageChange={pageChange}
      maxChange={maxChange}
      selectedRow={selectedRow}
    />
  );
};

export default Test;
