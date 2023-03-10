import { useState } from "react";
import { Icon } from "../../icons";

export type SortState = "asc" | "desc" | "";

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

export const useSort = (): [SortState, () => void] => {
  const [sortState, setSortState] = useState<SortState>("");

  function next() {
    if (sortState === "asc") setSortState("desc");
    if (sortState === "desc") setSortState("");
    if (sortState === "") setSortState("asc");
  }

  return [sortState, next];
};
