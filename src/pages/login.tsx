import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { useForm, UseFormRegister, FieldValues } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import "animate.css";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [inputState, setInputState] = useState("password");
  const { signIn } = useContext(AuthContext);

  const [wrong, setWrong] = useState({ user: false, password: false });

  async function handleSignIn(data: any) {
    try {
      await signIn(data);
    } catch (error) {
      const { status } = error as { status: number; message: string };
      handlerInputError(status, setWrong);
    }
  }

  return (
    <form
      id="login-form"
      className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <HeaderInfo />

      <div className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <InputForm
          id="email"
          type="email"
          label="Email"
          placeholder="Insira seu email..."
          register={register}
          wrong={wrong.user}
          onChange={() => setWrong({ user: false, password: false })}
        >
          <DomainIcon />
        </InputForm>

        <InputForm
          id="password"
          label="Senha"
          type={inputState}
          placeholder="Insira sua senha..."
          register={register}
          wrong={wrong.password}
          onChange={() => setWrong({ user: false, password: false })}
        >
          <EyeIcon state={inputState} setState={setInputState} />
        </InputForm>

        <div className="flex items-center justify-center">
          <button
            type="submit"
            className="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
            onClick={() => {}}
          >
            Sign in
          </button>
        </div>
      </div>
    </form>
  );
};

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

const InputForm = ({ id, type, register, label, ...props }: InputFormType) => {
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

const handlerInputError = (
  status: number,
  setWrong: ({}: { user: boolean; password: boolean }) => any
) => {
  if (status == 401) {
    setWrong({ user: false, password: true });
  }

  if (status == 404) {
    setWrong({ user: true, password: true });
  }
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

const HeaderInfo = () => {
  return (
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">HortiFruit Brilhadori</h1>

      <p className="mt-4 text-gray-500">
        Insira suas credenciais para entrar no sistema.
      </p>
    </div>
  );
};

const DomainIcon = () => {
  return (
    <span className="absolute inset-y-0 right-0 grid place-content-center px-4">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
        />
      </svg>
    </span>
  );
};

type EyeIconType = {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
};

const EyeIcon = ({ state, setState }: EyeIconType) => {
  return (
    <span
      onClick={() => changeEyeState(state, setState)}
      className="absolute inset-y-0 right-0 grid place-content-center px-4"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-4 w-4 text-gray-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
        />
      </svg>
    </span>
  );
};

function changeEyeState(state: string, setState: (id: string) => any) {
  if (state === "password") return setState("text");

  setState("password");
}

export default LoginPage;
