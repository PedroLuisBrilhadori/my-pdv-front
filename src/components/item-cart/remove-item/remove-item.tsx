import { Item } from "../types";

type RemoveItem = {
  onDeleted?: (item: Item) => void;
  item: Item;
};

export const RemoveItem = ({ onDeleted, item }: RemoveItem) => {
  return (
    <div>
      <a
        className="cursor-pointer"
        onClick={() => {
          if (onDeleted) onDeleted(item);
        }}
      >
        <span className="material-icons-outlined text-p-red">delete</span>
      </a>
    </div>
  );
};
