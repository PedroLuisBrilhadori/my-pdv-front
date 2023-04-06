import UserEvent from "@testing-library/user-event";
import { it, expect, describe, vi } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Table } from "./table";
import { mockTableProps } from "./mocks";

describe("Table Component tests", () => {
  const setup = () => {
    return render(
      <Table
        dataSource={mockTableProps.dataSource}
        columns={mockTableProps.columns}
        total={mockTableProps.total}
        max={mockTableProps.max}
        search={mockTableProps.search}
        pageChange={mockTableProps.pageChange}
        maxChange={mockTableProps.maxChange}
        selectedRow={mockTableProps.selectedRow}
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
      expect(rows.length - 1).toBe(mockTableProps.dataSource.length);
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

  describe("interacting tests", () => {
    it("should call a function when user click in a row", async () => {
      const selectedRowSpy = vi.spyOn(mockTableProps, "selectedRow");
      const { container } = setup();
      const row = container.querySelectorAll("tr")[3];

      await UserEvent.click(row);

      expect(selectedRowSpy).toBeCalled();
    });

    it("should call a function when user click in a pageChange", async () => {
      const pageChangeSpy = vi.spyOn(mockTableProps, "pageChange");
      const { container } = setup();

      const next = container.querySelectorAll(
        `[aria-label=table-navigate-next]`
      )[0];

      await UserEvent.click(next);

      expect(pageChangeSpy).toBeCalled();
    });

    it("should call a function when user click in a maxChange", async () => {
      const maxChangeSpy = vi.spyOn(mockTableProps, "maxChange");
      const { container } = setup();

      const select = container.querySelectorAll(
        `[aria-label=table-max-change]`
      )[0] as HTMLSelectElement;

      await UserEvent.selectOptions(select, select.options[1]);

      expect(maxChangeSpy).toBeCalled();
    });

    it("should call a function when user click in a searchInput", async () => {
      const inputChangeSpy = vi.spyOn(mockTableProps.search.input, "onChange");
      const { container } = setup();

      const select = container.querySelectorAll(
        `[aria-label=table-search-input]`
      )[0] as HTMLInputElement;

      fireEvent.change(select, { target: { value: "teste" } });

      expect(inputChangeSpy).toBeCalled();
    });

    it("should call a function when user click in a header sort", async () => {
      const sortChangeSpy = vi.spyOn(mockTableProps.columns[0], "sortListener");
      const { container } = setup();

      const header = container.querySelectorAll(
        `[aria-label=table-sort-Name]`
      )[0];

      await UserEvent.click(header);

      setTimeout(() => {
        expect(sortChangeSpy).toBeCalled();
      }, 700);
    });
  });
});
