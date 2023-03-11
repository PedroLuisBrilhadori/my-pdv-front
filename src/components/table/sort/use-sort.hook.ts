import { useState } from "react";
import { SortState, UseSortType } from "./types";

export const useSort = (): UseSortType => {
  const [sortState, setSortState] = useState<SortState>(null);

  function next(listener?: (state: SortState) => any) {
    let state = sortState;

    if (sortState === "asc") state = "desc";
    if (sortState === "desc") state = null;
    if (sortState === null) state = "asc";

    setSortState(state);

    setTimeout(() => {
      if (listener) listener(state);
    }, 600);
  }

  return [sortState, next];
};
