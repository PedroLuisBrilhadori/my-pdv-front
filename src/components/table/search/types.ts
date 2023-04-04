import { ChangeEventHandler } from "react";

export type SearchType = {
  input: InputType;
};

export type InputType = {
  placeholder: string;
  label: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};
