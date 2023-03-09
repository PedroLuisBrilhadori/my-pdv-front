import Head from "next/head";

type PageType = { children: JSX.Element; title?: string };

export const Page = ({ children, title }: PageType) => {
  return (
    <>
      <Head>
        <title>{title ?? "HortiFruit Brilhadori"}</title>
      </Head>
      <main>{children}</main>
    </>
  );
};
