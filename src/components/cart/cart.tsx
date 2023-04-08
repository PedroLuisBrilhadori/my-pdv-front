import { useDialog } from "../../hooks";

export const Cart = () => {
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
          setDialog(<div> teste </div>);
        }}
      >
        + new item
      </div>

      <div className="mt-6 space-y-6">
        <ul className="space-y-4">
          <Item></Item>
          <Item></Item>
          <Item></Item>
        </ul>

        <div className="space-y-4 text-center">
          <a className="block rounded bg-gray-700 px-5 py-3 text-sm text-gray-100 transition hover:bg-gray-600">
            Checkout
          </a>
        </div>
      </div>
    </div>
  );
};

export const Item = () => {
  return (
    <li className="flex items-center gap-4">
      <div className="h-16 w-16 bg-black rounded"></div>

      <div>
        <h3 className="text-sm text-gray-900">Basic Tee 6-Pack</h3>

        <dl className="mt-0.5 space-y-px text-[10px] text-gray-600">
          <div>
            <dt className="inline">Size: </dt>
            <dd className="inline">XXS</dd>
          </div>

          <div>
            <dt className="inline">Color:</dt>
            <dd className="inline">White</dd>
          </div>
        </dl>
      </div>

      <div></div>
    </li>
  );
};
