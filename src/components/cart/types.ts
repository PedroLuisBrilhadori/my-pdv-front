import { SetDialogType } from "../../context/dialog-context";
import { CardItemType, Item } from "./item";

export type CartType = {
  dialog: SetDialogType;
  cards: CardItemType[];
  onClearItems?: () => void;
  onItemDeleted?: (item: Item) => void;
};
