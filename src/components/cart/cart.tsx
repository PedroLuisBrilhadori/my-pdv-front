import { useDialog } from "../../hooks";
import { Item, ItemType } from "./item";
import { SetDialogType } from "../../context/dialog-context";

export type CartType = { dialog: SetDialogType; items: ItemType[] };

export const Cart = ({ dialog, items }: CartType) => {
  const { setDialog } = useDialog();

  return (
    <div
      className="w-full ronded bg-gray-100 p-4 pt-4 sm:p-6 lg:p-8"
      aria-modal="true"
      role="dialog"
      tabIndex={1}
    >
      <div
        className="cursor-pointer"
        onClick={() => {
          setDialog(dialog);
        }}
      >
        + new item
      </div>

      <div className="mt-6 space-y-6">
        <ul className="space-y-4">
          {items.map((item, i) => {
            return (
              <Item
                key={i}
                name={item.name}
                quantity={item.quantity}
                price={item.price}
              />
            );
          })}
        </ul>

        <div className="space-y-4 text-center">
          <a className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
            Finalizar Compra
          </a>
        </div>
      </div>
    </div>
  );
};
