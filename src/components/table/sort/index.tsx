import { useState } from "react";
import { Icon } from "../../icons";

export type SortState = "asc" | "desc" | null;

export type SortIconType = {
  state: SortState;
};

export const SortIcon = ({ state }: SortIconType) => {
  function renderIcon() {
    switch (state) {
      case "asc":
        return (
          <Icon className="animate__faster animate__animated animate__backInUp">
            expand_less
          </Icon>
        );

      case "desc":
        return (
          <Icon className="animate__animated animate__backInDown animate__faster">
            keyboard_arrow_down
          </Icon>
        );

      default:
        return <div className="w-6 h-6"></div>;
    }
  }

  return renderIcon();
};

export type HeaderSortType = {
  displayName: string;
  sortState: SortState;
  onClick?: (e: any) => any;
};

export const HeaderSort = ({
  displayName,
  onClick,
  sortState,
}: HeaderSortType) => {
  return (
    <div className="flex items-center cursor-pointer w-fit" onClick={onClick}>
      {displayName}
      <SortIcon state={sortState} />
    </div>
  );
};

export type UseSortType = [
  SortState,
  (listener?: (state: SortState, name: string) => any, name?: string) => void
];

export const useSort = (): UseSortType => {
  const [sortState, setSortState] = useState<SortState>(null);

  function next(
    listener?: (state: SortState, name: string) => any,
    name?: string
  ) {
    let state = sortState;

    if (sortState === "asc") state = "desc";
    if (sortState === "desc") state = null;
    if (sortState === null) state = "asc";

    if (listener) listener(state, name ?? "");
    setSortState(state);
  }

  return [sortState, next];
};
