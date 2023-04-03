import { useState } from "react";
import {
  ActionButtonsType,
  NavigateButtonType,
  PaginatorType,
  SelectorType,
} from "./types";

export const Paginator = ({ maxPage, ...props }: PaginatorType) => {
  return (
    <div className="flex justify-between items-center px-4 border-y-gray-200 border-y-2 py-2">
      <div>total de itens: {props.total}</div>

      <div className="flex justify-end gap-3">
        <Selector onChange={props.maxChange} />
        <ActionButtons maxPage={maxPage} pageChange={props.pageChange} />
      </div>
    </div>
  );
};

export const Selector = ({ onChange }: SelectorType) => {
  return (
    <div>
      <select
        className="cursor-pointer bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1.5"
        onChange={(e) => {
          onChange(Number(e.target.value));
        }}
      >
        <option>5</option>
        <option>10</option>
        <option>25</option>
        <option>50</option>
        <option>100</option>
      </select>
    </div>
  );
};

export const ActionButtons = ({ pageChange, maxPage }: ActionButtonsType) => {
  const [page, setPage] = useState(1);

  return (
    <div className="bg-gray-100 border border-gray-300 text-gray-900 rounded-lg p-1">
      <div className="flex items-center">
        <NavigateButton
          disabled={page == 1}
          type="before"
          onClick={() => {
            setPage((prev) => prev - 1);
            pageChange(page - 1);
          }}
        />
        <div>
          {page}/{maxPage}
        </div>
        <NavigateButton
          type="next"
          disabled={page == maxPage}
          onClick={() => {
            setPage((prev) => prev + 1);
            pageChange(page + 1);
          }}
        />
      </div>
    </div>
  );
};

export const NavigateButton = ({ type, ...props }: NavigateButtonType) => {
  const cursorStyle = props.disabled ? `cursor-default` : `cursor-pointer`;
  const onClick = props.disabled ? () => 0 : props.onClick;
  const arrowStyle = props.disabled ? `text-slate-500` : ``;

  return (
    <a className={`w-[24px] h-[24px] ${cursorStyle}`} onClick={onClick}>
      <span className={`material-symbols-outlined ${arrowStyle}`}>
        navigate_{type}
      </span>
    </a>
  );
};
