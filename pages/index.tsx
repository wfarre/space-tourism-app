import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
// import styles from '../styles/Home.module.css'
// import '@reach/Home.css'
// import { ReactComponent as Logo } from "../assets/shared/logo.svg";
import bgImgMobile from "../public/assets/home/background-home-mobile.jpg";
import bgImgDesktop from "../public/assets/home/background-home-desktop.jpg";

import Navbar from "../components/Navbar/Navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Image
        alt=""
        // src="/../public/assets/background-home-desktop.jpg"
        src={bgImgMobile}
        fill
        className="bg-img bg-img--mobile"
      />
      <Image
        alt=""
        // src="/../public/assets/background-home-desktop.jpg"
        src={bgImgDesktop}
        fill
        className="bg-img bg-img--desktop"
      />
      {/* <h1 className="main">Hello World</h1> */}

      <Navbar />

      <header className="header">
        <div className="header__info">
          <h2 className="header__info__sub">So, you want to travel to</h2>
          <h1 className="header__info__main">Space</h1>
          <p className="header__info__text">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>

        <div className="cta">
          <Link href="/destination">
            <button className="button button--cta">Explore</button>
          </Link>
        </div>
      </header>
    </div>
  );
}
