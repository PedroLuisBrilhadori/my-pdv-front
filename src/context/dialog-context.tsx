import { createContext, useCallback, useState } from "react";
import { Dialog } from "../components";

export type SetDialogType = { dialog: JSX.Element; title?: string };

export type DialogContextType = {
  unSetDialog: () => void;
  setDialog: (dialog: SetDialogType) => void;
};

export const DialogContext = createContext({} as DialogContextType);

export const DialogProvider = (props: any) => {
  const [dialog, setDialog] = useState<SetDialogType>();

  const unSetDialog = useCallback(() => {
    setDialog(undefined);
  }, [setDialog]);

  return (
    <DialogContext.Provider value={{ unSetDialog, setDialog }} {...props}>
      {props.children}
      {dialog && (
        <Dialog
          dialog={dialog.dialog}
          unSetDialog={unSetDialog}
          title={dialog.title}
        />
      )}
    </DialogContext.Provider>
  );
};
