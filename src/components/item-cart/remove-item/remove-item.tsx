import { ButtonIcon } from "../../icons";
import { Item } from "../types";

type RemoveItem = {
  onDeleted?: (item: Item) => void;
  item: Item;
};

export const RemoveItem = ({ onDeleted, item }: RemoveItem) => {
  return (
    <ButtonIcon
      onClick={() => {
        if (onDeleted) onDeleted(item);
      }}
      className="text-p-red active:bg-red-200 active:shadow-lg"
    >
      delete
    </ButtonIcon>
  );
};
