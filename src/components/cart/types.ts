import { SetDialogType } from "../../context/dialog-context";
import { ItemType } from "./item";

export type CartType = { dialog: SetDialogType; items: ItemType[] };
