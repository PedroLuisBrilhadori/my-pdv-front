import { CardItemType } from "./types";

export const CartItem = ({ item, ...props }: CardItemType) => {
  return (
    <li className="flex items-center justify-between px-5">
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 bg-black rounded"></div>

        <div>
          <h3 className="text-sm text-gray-900">{item.name}</h3>

          <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
            <div>
              <dt className="inline">Quantidade: </dt>
              <dd className="inline">{item.quantity}</dd>
            </div>

            <div>
              <dt className="inline">Preço:</dt>
              <dd className="inline">{item.price}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div>
        <a
          className="cursor-pointer"
          onClick={() => {
            if (props.onDeleted) props.onDeleted(item);
          }}
        >
          <span className="material-icons-outlined text-p-red">delete</span>
        </a>
      </div>
    </li>
  );
};
