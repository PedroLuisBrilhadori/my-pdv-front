import { Paginator, PaginatorType } from "../components/table/paginator";

const Test = () => {
  const mockPaginatorProps: PaginatorType = {
    total: 12,
    maxPage: 2,
    maxChange: (max) => max,
    pageChange: (page) => page,
  };

  return (
    <Paginator
      total={mockPaginatorProps.total}
      maxPage={mockPaginatorProps.maxPage}
      maxChange={mockPaginatorProps.maxChange}
      pageChange={mockPaginatorProps.pageChange}
    />
  );
};

export default Test;
