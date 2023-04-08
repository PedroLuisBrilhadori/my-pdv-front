import { useState } from "react";
import { SortState, UseSortType } from "./types";

export const useSort = (name: string): UseSortType => {
  const [sortState, setSortState] = useState<SortState>(null);

  function next(listener?: (state: SortState, name: string) => any) {
    let state = sortState;

    if (sortState === "asc") state = "desc";
    if (sortState === "desc") state = null;
    if (sortState === null) state = "asc";

    setSortState(state);

    setTimeout(() => {
      if (listener) listener(state, name);
    }, 600);
  }

  return [sortState, next];
};
