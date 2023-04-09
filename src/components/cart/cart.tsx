import { ItemCard } from "../item-cart";
import { AddItem } from "./add-item";
import { ClearCart } from "./clear-cart";
import { CartType } from "./types";

export const Cart = ({ dialog, cards, ...props }: CartType) => {
  const isEmpty = cards.length === 0 || !props.onClearItems;

  return (
    <div className="w-full rounded-xl bg-gray-100 p-4 gap-5 flex flex-col justify-between">
      <div className=" bg-gray-200 rounded-xl p-2 flex justify-between item-center">
        <AddItem dialog={dialog} />

        {isEmpty ? <></> : <ClearCart onClearItems={props.onClearItems} />}
      </div>

      <div className="overflow-y-scroll h-[25em]">
        <ul className="space-y-4">
          {cards.map((card, i) => {
            return (
              <ItemCard
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
