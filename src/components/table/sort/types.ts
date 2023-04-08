export type SortState = "asc" | "desc" | null;

export type SortIconType = {
  state: SortState;
};

export type UseSortType = [
  SortState,
  (listener?: (state: SortState, name: string) => any) => void
];

export type ColumnSortTitleType = {
  displayName: string;
  sortState: SortState;
  onClick?: (e: any) => any;
};
