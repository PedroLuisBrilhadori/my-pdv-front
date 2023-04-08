import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../context/AuthContext";
import { Page, InputForm, DomainIcon, EyeIcon } from "../components/";

const LoginPage = () => {
  const { register, handleSubmit } = useForm();
  const [inputState, setInputState] = useState("password");
  const { signIn } = useContext(AuthContext);

  const [error, setWrong] = useState({ user: false, password: false });

  async function handleSignIn(data: any) {
    signIn(data).catch((error) => {
      const { status } = error;

      if (status == 401) {
        setWrong({ user: false, password: true });
      }

      if (status == 404) {
        setWrong({ user: true, password: true });
      }
    });
  }

  return (
    <Page title="Login">
      <form
        autoComplete="off"
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
            error={error.user}
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
            error={error.password}
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
    </Page>
  );
};

const HeaderInfo = () => {
  return (
    <div className="mx-auto max-w-lg text-center">
      <h1 className="text-2xl font-bold sm:text-3xl">Marcelo HortiFruit</h1>

      <p className="mt-4 text-gray-500">
        Insira suas credênciais para entrar no sistema.
      </p>
    </div>
  );
};

export default LoginPage;
