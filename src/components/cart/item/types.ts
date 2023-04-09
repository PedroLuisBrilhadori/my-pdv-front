export type Item = {
  key: string;
  name: string;
  price: number;
  quantity: number;
};

export type CardItemType = {
  item: Item;
  onDeleted?: (item: Item) => void;
};
