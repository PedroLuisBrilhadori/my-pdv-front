import { ChangeEventHandler } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import "animate.css";

type InputFormType = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  error?: boolean;
  children: JSX.Element;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

export const InputForm = ({
  id,
  type,
  register,
  label,
  ...props
}: InputFormType) => {
  const styleName = props.error ? "error" : "normal";

  const style = {
    error: `animate__animated animate__shakeX`,
    normal: ``,
  };

  return (
    <div className={`${style[styleName]}`}>
      <label htmlFor="password" className="sr-only">
        {label}
      </label>

      <div className="relative">
        <InputData
          id={id}
          register={register}
          type={type}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
          error={props.error}
        />

        {props.children}
      </div>
    </div>
  );
};

type InputDataType = {
  id: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  error?: boolean;
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const InputData = ({ id, type, register, ...props }: InputDataType) => {
  const customStyle = `${
    props.error ? "bg-red-200 text-red-600 border-2 border-red-600" : ""
  }`;

  return (
    <input
      {...register(id)}
      type={type}
      autoComplete="off"
      className={`w-full rounded-lg p-4 pr-12 text-sm shadow-sm ${customStyle}`}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
