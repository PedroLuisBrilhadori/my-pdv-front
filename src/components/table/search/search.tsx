import { ChangeEvent, useEffect, useRef, useState } from "react";
import { SearchType, InputType } from "./types";

export const Search = ({ input }: SearchType) => {
  return (
    <div className="flex items-center">
      <Input
        placeholder={input.placeholder}
        label={input.label}
        onChange={input.onChange}
      />
      <Button />
    </div>
  );
};

const Input = ({ label, ...props }: InputType) => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [trash, setTrash] = useState(false);

  useEffect(() => {
    if (!trash && props.onChange) {
      props.onChange({
        target: { value: "" },
      } as ChangeEvent<HTMLInputElement>);
    }
  }, [trash, props]);

  return (
    <div className="w-full">
      <label htmlFor="simple-search" className="sr-only">
        {label}
      </label>
      <div className="relative w-full">
        <input
          type="text"
          id="simple-search"
          className="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder={props.placeholder}
          onChange={(e) => {
            if (props.onChange) props.onChange(e);

            if (inputRef.current?.value && !trash) setTrash(true);
            if (!inputRef.current?.value && trash) setTrash(false);
          }}
          ref={inputRef}
        />

        {trash ? (
          <div
            className="absolute inset-y-0 right-0 flex items-center pr-3"
            onClick={() => {
              if (inputRef.current?.value) inputRef.current.value = "";
              setTrash(false);
            }}
          >
            <span className="material-symbols-outlined text-gray-500 rounded-full transition-all hover:bg-gray-300 active:bg-gray-400 cursor-pointer select-none">
              close
            </span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

const Button = () => {
  return (
    <button
      type="submit"
      className="p-2.5 ml-2 text-sm font-medium text-white bg-p-blue rounded-lg border border-p-blue hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300"
    >
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-white"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"></path>
      </svg>
      <span className="sr-only">Search</span>
    </button>
  );
};
