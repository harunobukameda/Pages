export const config = {
  runtime: 'edge',
}

import Head from "next/head";

export default function Sg({ random }) {
  return (
    <div className="main">
      <Head>
        <title>SG</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <p>
        SGで生成されたページです。
        <br />
        <em>{random}</em>
      </p>
    </div>
  );
}

export async function getStaticProps() {
  const random = Math.floor(Math.random() * 100);

  return {
    props: {
      random,
    },
  };
}
