import { Bellefair, Barlow_Condensed, Barlow } from "@next/font/google";

import "../styles/globals.css";
import "../styles/main.css";
import type { AppProps } from "next/app";
import Head from "next/head";
// import { Html } from "next/document";

export default function App({ Component, pageProps }: AppProps) {
  return (
    //   <Head>
    //   <Html lang="en" />
    //   <title>Space Tourism - Home</title>
    //   <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    // </Head>
    // <Html lang="en">
    <Component {...pageProps} />
    // </Html>
  );
}
