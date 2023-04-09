import { Dispatch, SetStateAction, useContext, useState } from "react";
import { Cart, CartType, Page, TableDialog, ItemType } from "../components";
import { Product } from "./table";
import { DialogContext } from "../context/dialog-context";

const addItem = (
  product: Product,
  setItems: Dispatch<SetStateAction<ItemType[]>>
) => {
  setItems((prev) => [
    ...prev,
    {
      quantity: 0,
      name: product.name,
      price: product.price,
    },
  ]);
};

const Home = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const { unSetDialog } = useContext(DialogContext);

  const cart: CartType = {
    dialog: {
      dialog: (
        <TableDialog
          selectedRow={(row: Product) => {
            addItem(row, setItems);
            unSetDialog();
          }}
        />
      ),
      title: "Produtos",
    },

    items: items,
  };

  return (
    <Page taskBar={true}>
      <Cart dialog={cart.dialog} items={cart.items} />
    </Page>
  );
};

export default Home;
