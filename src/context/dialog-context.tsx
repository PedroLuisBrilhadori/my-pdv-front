import { createContext, useCallback, useEffect, useState } from "react";
import { Dialog, DialogType } from "../components";

export const DialogContext = createContext(
  {} as {
    unSetDialog: () => void;
    setDialog: (dialog: JSX.Element) => void;
  }
);

export const DialogProvider = (props: any) => {
  const [dialog, setDialog] = useState<JSX.Element>();

  const unSetDialog = useCallback(() => {
    setDialog(undefined);
  }, [setDialog]);

  return (
    <DialogContext.Provider value={{ unSetDialog, setDialog }} {...props}>
      {props.children}
      {dialog && <Dialog dialog={dialog} unSetDialog={unSetDialog} />}
    </DialogContext.Provider>
  );
};
