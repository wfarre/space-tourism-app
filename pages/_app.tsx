import { Bellefair, Barlow_Condensed, Barlow } from "@next/font/google";

import "../styles/globals.css";
import "../styles/main.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}
