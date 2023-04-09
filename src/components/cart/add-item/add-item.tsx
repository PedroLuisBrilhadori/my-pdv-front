import { SetDialogType } from "../../../context/dialog-context";
import { useDialog } from "../../../hooks";

type AddItem = {
  dialog: SetDialogType;
};

export const AddItem = ({ dialog }: AddItem) => {
  const { setDialog } = useDialog();

  return (
    <div
      className="flex items-center gap-2 cursor-pointer"
      onClick={() => {
        setDialog(dialog);
      }}
    >
      <span className="material-icons-outlined">add</span>
      <p className="text-xl">Adicionar produto</p>
    </div>
  );
};
