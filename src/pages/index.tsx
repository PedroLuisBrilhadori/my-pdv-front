import { Dispatch, SetStateAction, useContext, useState } from "react";
import { Cart, CartType, Page, TableDialog, CardItemType } from "../components";
import { Product } from "./table";
import { DialogContext } from "../context/dialog-context";

const selectedRow = (
  row: Product,
  cards: CardItemType[],
  setItems: Dispatch<SetStateAction<CardItemType[]>>
) => {
  const { name, price } = row;
  cards.push({
    item: { name, price, quantity: 0, key: String(Math.random()) },
    onDelete: (item) => {
      const filtered = cards.filter((card) => {
        return card.item.key !== item.key;
      });

      setItems(filtered);
    },
  });
};

const Home = () => {
  const [cards, setItems] = useState<CardItemType[]>([]);
  const { unSetDialog } = useContext(DialogContext);

  const cart: CartType = {
    dialog: {
      dialog: (
        <TableDialog
          selectedRow={(row: Product) => {
            selectedRow(row, cards, setItems);
            unSetDialog();
          }}
        />
      ),
      title: "Produtos",
    },

    cards: cards,
  };

  return (
    <Page taskBar={true}>
      <Cart dialog={cart.dialog} cards={cart.cards} />
    </Page>
  );
};

export default Home;
