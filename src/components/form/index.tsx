import { ChangeEventHandler } from "react";
import { FieldValues, UseFormRegister } from "react-hook-form";
import "animate.css";

type InputFormType = {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  register: UseFormRegister<FieldValues>;
  wrong?: boolean;
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
  const styleName = props.wrong ? "wrong" : "normal";

  const style = {
    wrong: `rounded border-2 border-red-600 text-red-600 animate__animated animate__shakeX`,
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
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
};

const InputData = ({ id, type, register, ...props }: InputDataType) => {
  return (
    <input
      {...register(id)}
      type={type}
      className={`w-full rounded-lg p-4 pr-12 text-sm shadow-sm`}
      placeholder={props.placeholder}
      value={props.value}
      onChange={props.onChange}
    />
  );
};
