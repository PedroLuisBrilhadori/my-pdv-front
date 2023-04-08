import { useContext } from "react";
import { DialogContext } from "../context/dialog-context";

export const useDialog = () => {
  const context = useContext(DialogContext);
  if (context === undefined) {
    throw new Error("useDialog must be used within a UserProvider");
  }

  return context;
};
