import { it, expect, describe } from "vitest";
import { render } from "@testing-library/react";
import { Table } from "./table";
import { mockTableProps } from "./mocks";

describe("Table Component tests", () => {
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

  const setup = () => {
    return render(
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

  describe("render tests", () => {
    it("should render table", () => {
      const { container } = setup();
      const table = container.querySelector("table");

      expect(table).toBeDefined();
    });

    it("should render all items of datasource", () => {
      const { container } = setup();
      const rows = container.querySelectorAll("tr");
      expect(rows.length - 1).toBe(dataSource.length);
    });

    it("should render pagninator", () => {
      const { container } = setup();
      const paginator = container.querySelector("[aria-label=table-paginator]");

      expect(paginator).toBeDefined();
      expect(paginator?.childElementCount).toBe(2);
    });

    it("should render table search", () => {
      const { container } = setup();
      const search = container.querySelector("[aria-label=table-search]");

      expect(search).toBeDefined();
      expect(search?.childElementCount).toBe(2);
    });
  });
});
