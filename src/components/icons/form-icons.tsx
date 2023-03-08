type EyeIconType = {
  state: string;
  setState: (state: string) => any;
};

export const EyeIcon = ({ state, setState }: EyeIconType) => {
  function changeEyeState(state: string, setState: (id: string) => any) {
    if (state === "password") return setState("text");

    setState("password");
  }

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

export const DomainIcon = () => {
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
