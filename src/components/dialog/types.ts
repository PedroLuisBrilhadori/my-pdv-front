export type DialogType = {
  dialog: JSX.Element;
  title?: string;
  unSetDialog: () => void;
};

export type DialogHeaderType = {
  unSetDialog: () => void;
  title?: string;
};
