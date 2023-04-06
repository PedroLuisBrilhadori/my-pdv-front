import UserEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { Paginator } from "./paginator";
import { PaginatorType } from "./types";

describe("Table Paginator Tests", () => {
  const mockPaginatorProps: PaginatorType = {
    total: 12,
    maxPage: 3,
    maxChange: (max) => max,
    pageChange: (page) => page,
  };

  const setup = () => {
    return render(
      <Paginator
        total={mockPaginatorProps.total}
        maxPage={mockPaginatorProps.maxPage}
        maxChange={mockPaginatorProps.maxChange}
        pageChange={mockPaginatorProps.pageChange}
      />
    );
  };

  describe("render tests", () => {
    it("should render total items", () => {
      setup();

      const totalItems = screen.getByText(/total de itens/i);
      const text =
        totalItems.textContent ===
        `total de itens: ${mockPaginatorProps.total}`;

      expect(totalItems).toBeDefined();
      expect(text).toBeTruthy();
    });

    it("should render max items select", () => {
      const { container } = setup();

      const maxItems = container.querySelectorAll(
        "[aria-label=table-max-change]"
      )[0] as HTMLSelectElement;

      expect(maxItems).toBeDefined();
      expect(maxItems.value).toBe("5");
    });

    it("should render navigate_before page", () => {
      const { container } = setup();

      const before = container.querySelectorAll(
        "[aria-label=table-navigate-before]"
      )[0];

      expect(before).toBeDefined();
      expect(before.childElementCount).toBe(1);
    });

    it("should render navigate_next page", () => {
      const { container } = setup();

      const next = container.querySelectorAll(
        "[aria-label=table-navigate-next]"
      )[0];

      expect(next).toBeDefined();
      expect(next.childElementCount).toBe(1);
    });
  });
});
