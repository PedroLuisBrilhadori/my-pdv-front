import { Icon } from "../../icons";
import { ColumnSortTitleType, SortIconType } from "./types";

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

export const ColumnSortTitle = ({ onClick, ...props }: ColumnSortTitleType) => {
  return (
    <div
      aria-label={`table-sort-${props.displayName}`}
      className="flex items-center cursor-pointer w-fit"
      onClick={onClick}
    >
      {props.displayName}
      <SortIcon state={props.sortState} />
    </div>
  );
};
