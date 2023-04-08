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
    <div className="flex items-center justify-center top-0 right-0 left-0 bottom-0 fixed">
      <div className="p-5 bg-gray-500 shadow-xl flex flex-col rounded-lg">
        <DialogHeader unSetDialog={unSetDialog} />

        {dialog}
      </div>
    </div>
  );
};

const DialogHeader = ({ unSetDialog }: { unSetDialog: () => void }) => {
  return (
    <div className="flex justify-end divide-gray-200">
      <button className="cursor-pointer" onClick={unSetDialog}>
        <span className="material-icons-outlined">close</span>
      </button>
    </div>
  );
};
