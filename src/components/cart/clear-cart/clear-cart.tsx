import { ButtonIcon } from "../../icons";

type ClearCart = {
  onClearItems?: () => void;
};

export const ClearCart = ({ onClearItems }: ClearCart) => {
  return <ButtonIcon onClick={onClearItems}>close</ButtonIcon>;
};
