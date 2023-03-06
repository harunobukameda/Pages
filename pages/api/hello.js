export const config = {
  runtime: 'edge',
}

import Head from "next/head";

export default function Ssr({ random }) {
  return (
    <div className="main">
      <Head>
        <title>SSR</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        SSRで生成されたページです。
        <br />
        <em>{random}</em>
      </p>
    </div>
  );
}

export async function getServerSideProps() {
  const random = Math.floor(Math.random() * 100);

  return {
    props: {
      random,
    },
  };
}