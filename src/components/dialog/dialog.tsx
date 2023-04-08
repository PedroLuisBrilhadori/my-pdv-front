import { useEffect } from "react";

export type DialogType = {
  dialog: JSX.Element;
  unSetDialog: () => void;
};

export const Dialog = ({ dialog, unSetDialog }: DialogType) => {
  useEffect(() => {
    const bind = (e: any) => {
      if (e.keyCode !== 27) {
        return;
      }

      if (
        document.activeElement &&
        ["INPUT", "SELECT"].includes(document.activeElement.tagName)
      ) {
        return;
      }

      unSetDialog();
    };

    document.addEventListener("keyup", bind);
    return () => document.removeEventListener("keyup", bind);
  }, [dialog, unSetDialog]);

  return (
    <div className="flex items-center justify-center fixed top-0 left-0 right-0 bottom-0 bg-p-background">
      <div className="py-3 bg-gray-100 shadow-xl flex flex-col rounded-lg">
        <DialogHeader unSetDialog={unSetDialog} title="Teste" />
        <div className="pt-3 px-3">{dialog}</div>
      </div>
    </div>
  );
};

export type DialogHeaderType = {
  unSetDialog: () => void;
  title: string;
};

const DialogHeader = ({ unSetDialog, ...props }: DialogHeaderType) => {
  return (
    <div className="flex justify-between border-b-2 divide-gray-200 w-full px-3 pb-1 gap-8">
      <p>{props.title}</p>

      <button className="cursor-pointer" onClick={unSetDialog}>
        <span className="material-icons-outlined">close</span>
      </button>
    </div>
  );
};
