import UserEvent from "@testing-library/user-event";
import { describe, expect, it, vi, beforeEach } from "vitest";
import { fireEvent, render, screen } from "@testing-library/react";
import { Paginator } from "./paginator";
import { PaginatorType } from "./types";

describe("Table Paginator Tests", () => {
  const mockPaginatorProps: PaginatorType = {
    total: 12,
    maxPage: 2,
    maxChange: (max) => max,
    pageChange: (page) => page,
  };

  const setup = () => {
    const { container } = render(
      <Paginator
        total={mockPaginatorProps.total}
        maxPage={mockPaginatorProps.maxPage}
        maxChange={mockPaginatorProps.maxChange}
        pageChange={mockPaginatorProps.pageChange}
      />
    );

    const maxItems = container.querySelectorAll(
      "[aria-label=table-max-change]"
    )[0] as HTMLSelectElement;

    const before = container.querySelectorAll(
      "[aria-label=table-navigate-before]"
    )[0];

    const next = container.querySelectorAll(
      "[aria-label=table-navigate-next]"
    )[0];

    return {
      container,
      maxItems,
      before,
      next,
    };
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
      const { maxItems } = setup();

      expect(maxItems).toBeDefined();
      expect(maxItems.value).toBe("5");
    });

    it("should render navigate_before page", () => {
      const { before } = setup();

      expect(before).toBeDefined();
      expect(before.childElementCount).toBe(1);
    });

    it("should render navigate_next page", () => {
      const { next } = setup();

      expect(next).toBeDefined();
      expect(next.childElementCount).toBe(1);
    });
  });

  describe("interacting tests", () => {
    beforeEach(() => {
      vi.resetAllMocks();
    });

    it("should change max page", async () => {
      const maxPageSpy = vi.spyOn(mockPaginatorProps, "maxChange");
      const { maxItems } = setup();

      await UserEvent.selectOptions(maxItems, maxItems.options[1]);
      expect(maxItems.value).toBe("10");
      expect(maxPageSpy).toBeCalled();
    });

    it("should not change page change with before", async () => {
      const pageChangeSpy = vi.spyOn(mockPaginatorProps, "pageChange");
      const { before } = setup();

      await UserEvent.click(before);

      expect(pageChangeSpy).not.toBeCalled();
    });

    it("should change page", async () => {
      const pageChangeSpy = vi.spyOn(mockPaginatorProps, "pageChange");
      const { next, before } = setup();

      await UserEvent.click(next);
      await UserEvent.click(next);
      await UserEvent.click(before);

      expect(pageChangeSpy).toBeCalledTimes(2);
    });
  });
});
