import { useContext, useState } from "react";
import {
  Cart,
  CartType,
  Page,
  TableDialog,
  CardItemType,
  Item,
} from "../components";
import { Product } from "./table";
import { DialogContext } from "../context/dialog-context";

const Home = () => {
  const [cards, setItems] = useState<CardItemType[]>([]);
  const { unSetDialog } = useContext(DialogContext);

  const cart: CartType = {
    cards: cards,

    dialog: {
      dialog: (
        <TableDialog
          selectedRow={(row: Product) => {
            const { name, price } = row;
            cards.push({
              item: { name, price, quantity: 0, key: String(Math.random()) },
            });
            unSetDialog();
          }}
        />
      ),
      title: "Produtos",
    },

    onItemDeleted: (item: Item) => {
      const filtered = cards.filter((card) => card.item.key !== item.key);

      setItems(filtered);
    },
  };

  return (
    <Page taskBar={true}>
      <Cart
        dialog={cart.dialog}
        cards={cart.cards}
        onItemDeleted={cart.onItemDeleted}
      />
    </Page>
  );
};

export default Home;
