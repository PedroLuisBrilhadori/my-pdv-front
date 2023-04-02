export type PaginatorType = {
  maxChange: (max: number) => void;
  pageChange: (page: number) => void;
  maxPage: number;
};

export type SelectorType = {
  onChange: (max: number) => void;
};

export type ActionButtonsType = {
  maxPage: number;
  pageChange: (page: number) => void;
};

export type NavigateButtonType = {
  type: "next" | "before";
  disabled: boolean;
  onClick: () => void;
};
