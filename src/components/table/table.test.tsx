import { test, expect, describe } from "vitest";
import { render, screen } from "@testing-library/react";
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

  test("should to be all items of datasource", async () => {
    render(
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

    const rows = screen.getAllByRole("th");
  });
});
