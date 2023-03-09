import Head from "next/head";
import { TaskBar } from "../taskbar";

type PageType = { children: JSX.Element; title?: string; taskBar?: boolean };

export const Page = ({ children, title, ...props }: PageType) => {
  return (
    <>
      <Head>
        <title>{title ?? "HortiFruit Brilhadori"}</title>
      </Head>
      <main>
        {props.taskBar ? <TaskBar /> : <></>}
        <div className="m-10">{children}</div>
      </main>
    </>
  );
};
