import { useDialog } from "../../hooks";
import { CartItem } from "./item";
import { CartType } from "./types";

export const Cart = ({ dialog, cards, ...props }: CartType) => {
  const { setDialog } = useDialog();

  return (
    <div
      className="w-full ronded bg-gray-100 p-4 pt-4 sm:p-6 lg:p-8 gap-5 flex flex-col justify-between"
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

      <div className="overflow-y-scroll h-[25em]">
        <ul className="space-y-4">
          {cards.map((card, i) => {
            return (
              <CartItem
                key={card.item.key}
                item={card.item}
                onDeleted={props.onItemDeleted}
              />
            );
          })}
        </ul>
      </div>

      <div className="space-y-4 text-center">
        <a className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
          Finalizar Compra
        </a>
      </div>
    </div>
  );
};
