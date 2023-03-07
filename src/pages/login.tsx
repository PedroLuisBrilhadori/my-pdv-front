import { Dispatch, SetStateAction, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [inputState, setInputState] = useState("password");
  const { signIn } = useContext(AuthContext);

  async function handleSignIn(data: any) {
    signIn(data);
  }

  return (
    <form
      id="login-form"
      className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8"
      onSubmit={handleSubmit(handleSignIn)}
    >
      <HeaderInfo />

      <div className="mx-auto mt-8 mb-0 max-w-md space-y-4">
        <div>
          <label htmlFor="email" className="sr-only">
            Email
          </label>

          <div className="relative">
            <input
              {...register("email")}
              type="email"
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter email"
            />
            <DomainIcon />
          </div>
        </div>

        <div>
          <label htmlFor="password" className="sr-only">
            Password
          </label>

          <div className="relative">
            <input
              {...register("password")}
              type={inputState}
              className="w-full rounded-lg border-gray-200 p-4 pr-12 text-sm shadow-sm"
              placeholder="Enter password"
            />
            <EyeIcon state={inputState} setState={setInputState} />
          </div>
        </div>

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

const EyeIcon = ({
  state,
  setState,
}: {
  state: string;
  setState: Dispatch<SetStateAction<string>>;
}) => {
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

function changeEyeState(
  state: string,
  setState: Dispatch<SetStateAction<string>>
) {
  if (state === "password") return setState("text");

  setState("password");
}

export default LoginPage;
